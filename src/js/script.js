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
    //or const modal = document.getElementsByClassName('modal');

    /* Get the button that opens the modal */
    const buttons = document.getElementsByClassName('modalOpener');



    //or btn.onclick = function() { modal.style.display = 'block'; };
    //* When the user clicks on the button, open the modal
    for (let btn of buttons) {
      /* extract modal id from href attribute */
      let modalID = btn.getAttribute('href');
      /* cut out the hash */
      modalID = modalID.substring(1);
      /* Get the modal element */
      const modal = document.getElementById(modalID);

      /* Get the <a> element that closes the modal */
      const quit = modal.querySelector('a[href*="quit"]');
      const cancel = modal.querySelector('a[href*="cancel"]');
      const send = modal.querySelector('a[href*="send"]');

      btn.onclick = function() {
        modal.style.display = 'block';
      };

      /* Close modal When the user clicks on any button inside it */
      if (quit) {
        quit.onclick = function () { modal.style.display = 'none'; };
      }
      if (cancel) {
        cancel.onclick = function () { modal.style.display = 'none'; };
      }
      if (send) {
        send.onclick = function () { modal.style.display = 'none'; };
      }

      /* Close modal When user clicks anywhere outside of it */
      window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
          event.target.style.display = 'none';
        }
      };
    }

  },

  init: function () {
    const thisApp = this;

    thisApp.initDatePicker();
    thisApp.hideSidebar();
    thisApp.initModal();
  }
};

app.init();