// These functions might required heavy testing - because of reliability
export const COMPLETED = "COMPLETED";

/**
 * Takes in the list of option, deselects if already selected, returns the new list
 * @param {%s} list
 * @param {%s} option
 */
export const toggleOptionInList = (list, option) => {
  const index = list.indexOf(option);
  const exists = index > -1;
  if (exists) {
    return list.filter(a => a !== option);
  } else {
    return [...list, option];
  }
};

export const addZero = i => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

export const createWatchListString = members => {
  return members.map(m => m.name).join(", ");
};

export const getInitialsForName = name => {
  const initials = name.match(/\b\w/g) || [];
  return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
};

export const getBeautifulDate = date => {
  return `${addZero(date.getDate())} - ${addZero(
    date.getMonth() + 1
  )} - ${date.getFullYear()}`;
};

/**@abstract
 * Recieves a list of Task object in the form of array,
 * and checks for the overdue tasks and only return the overdue ones
 * and RETURNS a list of the current statuses respecting the indices
 */
export const updateStatuses = (tasks = []) => {
  const statuses = new Array(tasks.length);
  for (const taskIndex in tasks) {
    const task = tasks[taskIndex];
    let date = new Date();
    let _date = new Date(task.timeDue);
    if (task.isCompleted) {
      statuses[taskIndex] = "COMPLETED";
    } else if (
      new Date(2020, 1, 0, date.getHours(), date.getMinutes(), 0) >=
      new Date(2020, 1, 0, _date.getHours(), _date.getMinutes(), 0)
    ) {
      statuses[taskIndex] = "OVERDUE";
    } else {
      statuses[taskIndex] = "UPCOMING";
    }
  }
  return statuses;
};

/**@abstract
 * Safely prints the minutes and hours in readable format by adding
 * necessary zeroes.
 */
export const printTimeFromDate = date => {
  return `${addZero(date.getHours())} : ${addZero(date.getMinutes())}`;
};

export const toTitleCase = (str = "") => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

/**@abstract
 * Function that takes in a status and gives color coding according to the status of the task
 *
 */
export const decideColor = (status = "") => {
  return status === "OVERDUE"
    ? `red`
    : status === "COMPLETED"
    ? "gray"
    : status === "UPCOMING"
    ? "green"
    : "";
};

export const createOverdueMessage = statuses => {
  const overdueSize = statuses.filter(a => a === "OVERDUE").length;
  if (overdueSize == false)
    if (overdueSize === 0) {
      return {
        color: "green",
        message: "Everything seems fine",
        icon: "check-square"
      };
    }
  return {
    color: "red",
    message: `${overdueSize} ${
      overdueSize === 1 ? "task is " : "tasks are"
    } overdue`,
    icon: "exclamation-triangle"
  };
};
