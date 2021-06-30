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
    // Get the modal
    // const modal = document.getElementsByClassName('modal');

    // Get the button that opens the modal
    const buttons = document.getElementsByClassName('modalOpener');

    // Get the <a> element that closes the modal
    const close = document.getElementById('quit');
    const cancel = document.getElementById('cancel');
    const send = document.getElementById('send');

    ////btn.onclick = function() { modal.style.display = 'block'; };
    // When the user clicks on the button, open the modal
    for (let btn of buttons) {
      let modalID = btn.getAttribute('href');
      modalID = modalID.substring(1);
      const modal = document.getElementById(modalID);
      console.log(modal);

      btn.onclick = function() {
        modal.style.display = 'block';
      };

      // When the user clicks on <a> (quit), close the modal
      close.onclick = function() {
        modal.style.display = 'none';
      };
      // When the user clicks on <a> (cancel), close the modal
      cancel.onclick = function() {
        modal.style.display = 'none';
      };
      // When the user clicks on <a> (send), close the modal
      send.onclick = function() {
        modal.style.display = 'none';
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = 'none';
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