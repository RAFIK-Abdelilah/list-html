const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Bouton supprimer
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.classList.add('delete');
  deleteBtn.onclick = () => li.remove();

  // Marquer comme fait
  li.addEventListener('click', () => li.classList.toggle('completed'));

  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = '';
}
