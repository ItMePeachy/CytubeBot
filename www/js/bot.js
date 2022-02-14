socket = io(IO_URL);

setTimeout(() => socket.emit('getStats'), 1000);

google.load(
    'visualization',
    '1',
    {
      packages: ['corechart', 'annotatedtimeline'],
    },
);

google.setOnLoadCallback(() => {
  pieStyle = {
    backgroundColor: '#404040',
    legend: {
      textStyle: {
        color: 'white',
        fontName: '<global-font-name>',
        fontSize: '<global-font-size>',
      },
    },
    chartArea: {left: 0, top: 0, width: '100%', height: '100%'},
    pieSliceBorderColor: '#404040',
  };

  socket.on('roomStats', (data) => {
    $('h1').text(`${data.room} Statistics`);

    for (const video of data.popularVideos) {
      const row = $('<tr><td class="video"></td><td class="freq"></td></tr>');
      let link;
      switch (video[0]) {
        case 'yt':
          link = `http://youtube.com/watch?v=${video[1]}`;
          break;
        case 'vm':
          link = `http://vimeo.com/${video[1]}`;
          break;
        case 'sc':
          link = '#';
          break;
        case 'bt':
          link = `http://blip.tv/posts/${video[1]}`;
          break;
        case 'dm':
          link = `http://www.dailymotion.com/video/${video[1]}`;
          break;
        default:
          link = '#';
      }

      let title = '';
      if (video[2].length > 50) {
        title = video[2].substring(0, 50);
      } else {
        title = video[2];
      }

      row.children('.video').append($('<a></a>', {
        text: title,
        href: link,
        class: video[3] ? 'invalid' : '',
      }));
      row.children('.freq').text(video[4]);
      popularVideoTable = $('#popular_video_table > tbody');
      popularVideoTable.append(row);
    }

    const userVideoData = new google.visualization.DataTable();
    userVideoData.addColumn('string', 'Topping');
    userVideoData.addColumn('number', 'Slices');
    userVideoData.addRows(data.userVideoStats);

    const userVideoChart =
        new google.visualization.PieChart(document.getElementById('user_video_div'));
    userVideoChart.draw(userVideoData, pieStyle);

    const userChatData = new google.visualization.DataTable();
    userChatData.addColumn('string', 'Topping');
    userChatData.addColumn('number', 'Slices');
    userChatData.addRows(data.userChatStats);

    const userChatChart =
        new google.visualization.PieChart(document.getElementById('user_chat_div'));
    userChatChart.draw(userChatData, pieStyle);

    const averageUserData = new google.visualization.DataTable();
    averageUserData.addColumn('datetime', 'Time');
    averageUserData.addColumn('number', 'Short Moving average');
    averageUserData.addColumn('number', 'Long Moving average');
    averageUserData.addColumn('number', 'Number of Users');

    const smaspan = 24 * 7;
    const lmaspan = 24 * 7 * 5;
    let sum1 = 0;
    let sum2 = 0;

    const averageUsers = data.averageUsers;
    for (i = 0; i < averageUsers.length; i++) {
      averageUsers[i][0] = new Date(averageUsers[i][0]);
      const row = [averageUsers[i][0], 0, 0, averageUsers[i][1]];
      sum1 += averageUsers[i][1];
      sum2 += averageUsers[i][1];
      if (i >= (smaspan - 1)) {
        row[1] = sum1 / smaspan;
        sum1 -= averageUsers[i - smaspan + 1][1];
      }
      if (i >= (lmaspan - 1)) {
        row[2] = sum2 / lmaspan;
        sum2 -= averageUsers[i - lmaspan + 1][1];
      }
      averageUserData.addRow(row);
    }

    const averageUserTimeline =
        new google.visualization.AnnotatedTimeLine(document.getElementById('average_user_div'));
    averageUserTimeline.draw(averageUserData, {
      displayAnnotations: true,
      colors: ['black', 'green', 'orange'],
      max: 50,
    });

    socket.disconnect();
  });
});
