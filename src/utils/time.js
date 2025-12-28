import { startOfWeek, endOfWeek } from "date-fns";

export function getWeekRange(date) {
  return {
    start: startOfWeek(date, { weekStartsOn: 1 }),
    end: endOfWeek(date, { weekStartsOn: 1 }),
  };
}
