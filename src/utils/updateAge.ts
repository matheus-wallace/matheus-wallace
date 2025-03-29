const updateAge = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const birthMonth = 6;
  const birthDay = 26;

  let age;
  if (month > birthMonth || (month === birthMonth && day >= birthDay)) {
    age = date.getFullYear() % 100;
  } else {
    age = (date.getFullYear() % 100) - 1;
  }

  return age;
};

export default updateAge;
