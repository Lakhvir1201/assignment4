"use strict";

$(document).ready(() => {
  const tasks = [];

  $("#add_task").click(() => {
    const textbox = $("#task");
    const task = textbox.val();
    if (task === "") {
      alert("Please enter a task.");
      textbox.focus();
    } else {
      // add task to array
      let taskArr = task.split(",");
      for (let i = 0; i < taskArr.length; i++) {
        tasks.push(taskArr[i]);
      }

      // clear task text box and re-display tasks
      textbox.val("");
      $("#task_list").val(tasks.join("\n"));
      textbox.focus();
    }
  });

  $("#clear_tasks").click(() => {
    tasks.length = 0;
    $("#task_list").val("");
    $("#task").focus();
  });

  $("#task").focus();
});
