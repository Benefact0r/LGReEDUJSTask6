document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const totalTasks = document.getElementById("totalTasks");
  const completedTasks = document.getElementById("completedTasks");

  let totalTaskCount = 0;
  let completedTaskCount = 0;

  // Function to update counters
  const updateCounters = () => {
      totalTasks.textContent = totalTaskCount;
      completedTasks.textContent = completedTaskCount;
  };

  // Add Task
  const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") return; // Ignore empty input

      // Create task element
      const taskItem = document.createElement("li");
      taskItem.classList.add("task");

      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;

      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Complete";
      completeBtn.addEventListener("click", () => {
          if (!taskItem.classList.contains("completed")) {
              taskItem.classList.add("completed");
              completedTaskCount++;
              updateCounters();
          }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
          if (taskItem.classList.contains("completed")) {
              completedTaskCount--;
          }
          totalTaskCount--;
          taskItem.remove();
          updateCounters();
      });

      // Append elements
      taskItem.appendChild(taskSpan);
      taskItem.appendChild(completeBtn);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);

      // Update counters
      totalTaskCount++;
      updateCounters();

      // Clear input field
      taskInput.value = "";
  };

  // Event Listener for Add Task button
  addTaskBtn.addEventListener("click", addTask);

  // Allow adding task by pressing Enter key
  taskInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
          addTask();
      }
  });
});
