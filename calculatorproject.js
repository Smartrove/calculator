// clear.........................
document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector("#displaycalc").value = "";
});

// backspace........................

const backspace = () => {
  const number = document.querySelector("#displaycalc").value.slice(0, -1);
  document.querySelector("#displaycalc").value = number;
};

// function for number one................................

const one = () => {
  if (document.querySelector("#displaycalc").value == "") {
    document.querySelector("#displaycalc").value = "1";
  } else {
    document.querySelector("#displaycalc").value =
      document.querySelector("#displaycalc").value + "1";
  }
};

// function for number two...................................

const two = () => {
  if (document.querySelector("#displaycalc").value == " ") {
    document.querySelector("#displaycalc").value = "2";
  } else {
    document.querySelector("#displaycalc").value =
      document.querySelector("#displaycalc").value + "2";
  }
};

// function for number three...................................

const three = () => {
  if (document.querySelector("#displaycalc").value == "") {
    document.querySelector("#displaycalc").value = "3";
  } else {
    document.querySelector("#displaycalc").value =
      document.querySelector("#displaycalc").value + "3";
  }
};

// function for number four...................................

const four = () => {
  if (document.querySelector("#displaycalc").value == "") {
    document.querySelector("#displaycalc").value = "4";
  } else {
    document.querySelector("#displaycalc").value =
      document.querySelector("#displaycalc").value + "4";
  }
};
// function for number five...................................

const five = () => {
  if (document.querySelector("#displaycalc").value == "") {
    document.querySelector("#displaycalc").value = "5";
  } else {
    document.querySelector("#displaycalc").value =
      document.querySelector("#displaycalc").value + "5";
  }
};

// function for number six...................................

const six = () => {
  if (document.querySelector("#displaycalc").value == "") {
    document.querySelector("#displaycalc").value = "6";
  } else {
    document.querySelector("#displaycalc").value =
      document.querySelector("#displaycalc").value + "6";
  }
};

// function for number seven...................................

const seven = () => {
  if (document.querySelector("#displaycalc").value == "") {
    document.querySelector("#displaycalc").value = "7";
  } else {
    document.querySelector("#displaycalc").value =
      document.querySelector("#displaycalc").value + "7";
  }
};

// function for number eight...................................

const eight = () => {
  if (document.querySelector("#displaycalc").value == "") {
    document.querySelector("#displaycalc").value = "8";
  } else {
    document.querySelector("#displaycalc").value =
      document.querySelector("#displaycalc").value + "8";
  }
};

// function for number nine...................................

const nine = () => {
  if (document.querySelector("#displaycalc").value == "") {
    document.querySelector("#displaycalc").value = "9";
  } else {
    document.querySelector("#displaycalc").value =
      document.querySelector("#displaycalc").value + "9";
  }
};

// function for number zero...................................

const zero = () => {
  if (document.querySelector("#displaycalc").value == "") {
    document.querySelector("#displaycalc").value = "0";
  } else {
    document.querySelector("#displaycalc").value =
      document.querySelector("#displaycalc").value + "0";
  }
};

// function for number point...................................

const point = () => {
  if (document.querySelector("#displaycalc").value == "") {
    document.querySelector("#displaycalc").value = ".";
  } else {
    document.querySelector("#displaycalc").value =
      document.querySelector("#displaycalc").value + ".";
  }
};
