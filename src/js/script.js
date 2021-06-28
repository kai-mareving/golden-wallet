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

  init: function () {
    const thisApp = this;

    thisApp.initDatePicker();
    thisApp.hideSidebar();
  }
};

app.init();