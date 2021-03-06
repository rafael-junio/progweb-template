// Constantes
const div_submit = document.createElement("div");
const btn_submit = document.createElement("button");
const div_container = document.getElementById("main_container");

div_submit.classList.add("center-align");

btn_submit.id = "btn_submit";
btn_submit.type = "submit";
btn_submit.classList.add("btn", "waves-effect", "waves-light");

div_submit.appendChild(btn_submit);
// --------------------------------------------

// Funções
function createMovieTvElements() {
  // Forms
  const form_type = document.createElement('form');
  form_type.id = "form_type";
  form_type.method = "POST";
  form_type.action = "/media/upload/search";

  // Div
  const div_type_row = document.createElement('div');
  div_type_row.classList.add("row");

  // Text
  const div_input_text = document.createElement('div');
  const icon_btn_title = document.createElement('I');
  const input_text = document.createElement('input');
  const label_text = document.createElement('label');

  div_input_text.classList.add("input-field", "col", "s6");

  icon_btn_title.classList.add("material-icons", "prefix");
  icon_btn_title.innerText = "title";

  input_text.id = "titleMedia";
  input_text.name = "titleMedia";
  input_text.type = "text";
  input_text.required = true;

  label_text.htmlFor = input_text.name;
  label_text.innerText = "Título da Mídia";

  div_input_text.appendChild(icon_btn_title);
  div_input_text.appendChild(input_text);
  div_input_text.appendChild(label_text);

  div_type_row.appendChild(div_input_text);

  // Hidden
  const input_hidden = document.createElement("input");
  input_hidden.id = "hideType";
  input_hidden.name = "typeMedia";
  input_hidden.type = "hidden";
  input_hidden.value = document.getElementById("typeMedia").value

  div_type_row.appendChild(input_hidden);

  // Language
  const div_input_radio = document.createElement("div");
  const p = document.createElement('p');
  const aval_lang = [{ "pt-BR": "Português" }, { "en-US": "Inglês" }, { "es": "Espanhol" }];

  div_input_radio.id = "div_language";
  div_input_radio.classList.add("col", "s6")
  div_input_radio.style.textAlign = "center";
  div_input_radio.style.verticalAlign = "middle";

  for (let i in aval_lang) {
    let val = aval_lang[i];
    for (let j in val) {
      let label_radio = document.createElement('label');
      let input_radio = document.createElement('input');
      let span = document.createElement('span');

      input_radio.type = 'radio';
      input_radio.className = 'with-gap';
      input_radio.value = j;
      input_radio.name = 'language';
      span.innerHTML = val[j];
      if (val[j] === 'Português') input_radio.checked = true;

      label_radio.appendChild(input_radio);
      label_radio.appendChild(span);
      p.appendChild(label_radio);
    };
  };

  div_input_radio.appendChild(p);
  div_type_row.appendChild(div_input_radio);

  // Button
  btn_submit.innerHTML = 'Pesquisar <i class="material-icons right">search</i>';

  // Form append
  div_type_row.appendChild(div_submit);
  form_type.appendChild(div_type_row);
  div_container.appendChild(form_type);
};

function createUploadElements() {
  // Forms
  const form_upload = document.createElement('form');
  form_upload.id = "form_upload";
  form_upload.method = "POST";
  form_upload.action = "/users/upload";
  form_upload.enctype = "multipart/form-data";

  // Div
  const div_type_row = document.createElement('div');
  const div_input_upload = document.createElement('div');
  const div_wrapper_upload = document.createElement('div');
  const div_btn_upload = document.createElement('div');

  div_type_row.classList.add("row");
  div_input_upload.classList.add("file-field", "input-field", "col", "s6");
  div_btn_upload.classList.add("btn");
  div_wrapper_upload.classList.add("file-path-wrapper");

  // Icon
  const icon_btn_upload = document.createElement('I');
  icon_btn_upload.classList.add("material-icons", "left");
  icon_btn_upload.innerText = "insert_drive_file";

  // Span
  const span_upload = document.createElement('span');
  span_upload.innerText = "Arquivo";

  // File
  const input_upload = document.createElement('input');
  input_upload.id = "fileMedia";
  input_upload.name = "file";
  input_upload.type = "file";
  input_upload.multiple = true;
  input_upload.required = true;

  // Text
  const input_wrapper_upload = document.createElement('input');
  input_wrapper_upload.classList.add("file-path", "validate");
  input_wrapper_upload.type = "text";
  input_wrapper_upload.placeholder = "Envie um ou mais arquivos";

  // Hidden
  const input_hidden = document.createElement("input");
  input_hidden.id = "hideType";
  input_hidden.name = "typeMedia";
  input_hidden.type = "hidden";
  input_hidden.value = "default"

  div_type_row.appendChild(input_hidden);

  // Appends
  div_btn_upload.appendChild(icon_btn_upload);
  div_btn_upload.appendChild(span_upload);
  div_btn_upload.appendChild(input_upload);

  div_wrapper_upload.appendChild(input_wrapper_upload);

  div_input_upload.appendChild(div_btn_upload);
  div_input_upload.appendChild(div_wrapper_upload);

  div_type_row.appendChild(div_input_upload);

  // Button
  btn_submit.innerHTML = 'Upload <i class="material-icons right">file_upload</i>';

  // Form append
  div_type_row.appendChild(div_submit);
  form_upload.appendChild(div_type_row);
  div_container.appendChild(form_upload);
};

function removeContainerElements() {
  let child = div_container.lastElementChild;
  while (child) {
    div_container.removeChild(child);
    child = div_container.lastElementChild;
  };
};

function removeCardsElements() {
  const div_cards = document.getElementById("media_container");
  let child = div_cards.lastElementChild;
  while (child) {
    div_cards.removeChild(child);
    child = div_cards.lastElementChild;
  };
};

function removeMediaElements() {
  const div_cards = document.getElementById("media_container");
  const div_form = document.getElementById("form_media_container");
  let childC = div_cards.lastElementChild;
  let childF = div_form.lastElementChild;

  while (childF) {
    div_form.removeChild(childF);
    childF = div_form.lastElementChild;
  };

  while (childC) {
    div_cards.removeChild(childC);
    childC = div_cards.lastElementChild;
  };
};

function chooseMedia(media) {
  localStorage.setItem('id_media', media);
  document.getElementById("idTMDB").value = localStorage.getItem('id_media');
  localStorage.clear();
  removeCardsElements();
  M.toast({ html: 'Filme selecionado', inDuration: 50, outDuration: 75 });
  document.getElementById('btn_submit_card').disabled = false;
};
// --------------------------------------------

// Eventos
function changeTypeMedia() {
  const typeSelectedValue = document.getElementById('typeMedia').value;
  const form_exists = div_container.childNodes.length > 0 ? true : false;
  if (window.location.pathname === '/media/upload/search') {
    removeMediaElements();
  }

  if (!form_exists && typeSelectedValue === 'default') {
    return createUploadElements();
  } else if (!form_exists && (typeSelectedValue === 'movie' || typeSelectedValue === 'tv')) {
    return createMovieTvElements();
  } else if (form_exists && typeSelectedValue === 'default') {
    removeContainerElements();
    createUploadElements();
  } else {
    removeContainerElements();
    createMovieTvElements();
  };
};