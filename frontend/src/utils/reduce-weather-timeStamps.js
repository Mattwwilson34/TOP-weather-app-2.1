const reduceWeatherTimeStamps = (weatherTimeStampsArray, numOfDays = 5) => {
  let reducedWeatherArray = [weatherTimeStampsArray.list[0]];
  let indexToCheck = 0;

  weatherTimeStampsArray.list.forEach((timeStamp) => {
    //
    // Limit days of the week
    if (indexToCheck === numOfDays - 1) return;

    // store day of week from string to compare
    const dayOfWeek = timeStamp.dt.split(',')[0];
    const reducedDayOfWeek = reducedWeatherArray[indexToCheck].dt.split(',')[0];

    // store am/pm string to compare
    const dayOfWeekAmPm = timeStamp.dt.split(',')[2].slice(-2);

    if (dayOfWeek === reducedDayOfWeek || dayOfWeekAmPm === 'am') {
      return;
    } else {
      reducedWeatherArray.push(timeStamp);
      indexToCheck += 1;
    }
  });
  return reducedWeatherArray;
};

export default reduceWeatherTimeStamps;
