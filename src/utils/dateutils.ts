export function DiffYears(dt2: Date, dt1: Date) 
{
  // Calculate the difference in milliseconds between the two dates
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  // Convert the difference from milliseconds to days
  diff /= (60 * 60 * 24);
  // Calculate the approximate number of years by dividing the difference in days by the average number of days in a year (365.25)
  return Math.abs(Math.round(diff / 365.25));
}