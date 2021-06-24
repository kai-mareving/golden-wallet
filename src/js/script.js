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

  init: function () {
    const thisApp = this;

    thisApp.initDatePicker();
  }
};

app.init();