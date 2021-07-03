const app = {
  initDatePicker: function () {
    const datePicker = this;

    datePicker.dom = {};
    datePicker.dom.minDate = document.querySelector('#minDate');
    datePicker.dom.maxDate = document.querySelector('#maxDate');
    datePicker.nowDate = new Date();
    datePicker.maxDate = app.addDays(datePicker.nowDate, 14);

    // eslint-disable-next-line no-undef
    flatpickr(datePicker.dom.minDate,{defaultDate: datePicker.nowDate,});
    // eslint-disable-next-line no-undef
    flatpickr(datePicker.dom.maxDate,{defaultDate: datePicker.maxDate,});
  },

  addDays: function(dateStr, days) {
    const dateObj = new Date(dateStr);
    dateObj.setDate(dateObj.getDate() + days);
    return dateObj;
  },

  hideSidebar: function() {
    const thisApp = this;

    thisApp.dom = {};
    thisApp.dom.pageBody = document.querySelector('body');
    thisApp.dom.sidebarTrigger = document.getElementById('sb-trigger-link');
    thisApp.dom.sidebarSection = document.querySelector('header.sidebar');

    window.addEventListener('resize', function () {
      if (screen.width <= 768) {
        thisApp.dom.sidebarSection.classList.add('closed');
        thisApp.dom.pageBody.classList.add('closed');
      }
    });

    thisApp.dom.sidebarTrigger.addEventListener('click', function () {
      thisApp.dom.sidebarSection.classList.toggle('closed');
      thisApp.dom.pageBody.classList.toggle('closed');
    });
  },

  initModal: function () {
    /* Get the button that opens the modal */
    const buttons = document.getElementsByClassName('modalOpener');

    /* When the user clicks on the button, open the modal */
    for (let btn of buttons) {
      let modalID = btn.getAttribute('href'); /* extract modal id from href attribute */
      modalID = modalID.substring(1); /* cut out the hash */
      const modal = document.getElementById(modalID); /* Get the modal element */

      /* Get the <a> element that closes the modal */
      const links = {};
      links.quit = modal.querySelector('a[href*="quit"]');
      links.cancel = modal.querySelector('a[href*="cancel"]');
      links.send = modal.querySelector('a[href*="send"]');

      btn.onclick = function() {
        modal.style.display = 'block';
      };

      /* Close modal When the user clicks on any button inside it */
      if (links.quit) {
        links.quit.onclick = function () { modal.style.display = 'none'; };
      }
      if (links.cancel) {
        links.cancel.onclick = function () { modal.style.display = 'none'; };
      }
      if (links.send) {
        links.send.onclick = function () { modal.style.display = 'none'; };
      }

      /* Close modal When user clicks anywhere outside of it */
      window.onclick = function (event) {
        const thisTarget = event.target;
        if (thisTarget.classList.contains('modal')) {
          thisTarget.style.display = 'none';
        }
      };

      document.addEventListener('keyup', function (event) {
        if (event.keyCode === 27) {
          modal.style.display = 'none';
        }
      });
    }

  },

  renderChart: function () {
    const ctx = document.getElementById('myChart').getContext('2d');

    // eslint-disable-next-line no-undef
    const chart = new Chart(ctx, {
      // 1
      type: 'bar',
      data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        // 3
        datasets: [{
          // 4
          label: 'Signups',
          // 5
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          // 6
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          // 7
          hidden: true,
        }]
      },
      options: {
        legend: {
          display: false,
          position: 'top',
          labels: {
            usePointStyle: true,
            fontColor: '#56819F',
            padding: 20,
          }
        }
      }
    });

  },

  init: function () {
    const thisApp = this;

    if (window.location.href.indexOf('links.html') == -1) {
      thisApp.initDatePicker();
      thisApp.renderChart();
    }
    thisApp.hideSidebar();
    thisApp.initModal();
  }
};

app.init();