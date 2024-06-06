class Member {
   constructor(name, position) {
       this.name = name;
       this.position = position;
     }
}    

class Haircut {
     constructor(id, name)  { 
     this.id = id;
     this.name = name;
     this.members = [];
     }

      addMember(member) {
         this.members.push(member);
         }

     deleteMember(member) {
     let index = this.members.indexOf(member);
     this,members.splice(index, 1);
     }
    }

  let haircut = [];
  let haircutId = 0;

    onClick('new-haircut',() => {
      haircut.push(new Haircut(haircutId++, getValue('new-haircut-name')));
      drawDOM();
    ));

    function onClick(id,action) {
     let element = document.getElementById(id);
     element.addEventListener('click', action);
     return element;
    }

    function getValue(id) {
        return document.getElementById(id).value;
    }
    
    function drawDOM() {
    let HaircutDiv = document.getElementById('Haircuts');
      clearElement(HaircutDiv);
        for (haircut of haircuts) {
        let table = createHaircutTable(haircut);
        let title = document.createElement('h2');
        title.innerHTML = haircut.name;
        title.apprendChild(createDeleteHaircutButton(haircut));
       haircutDiv.apprendChild(title);
       haircutDiv.apprendChild(table);
       for (member of haircut.members) {
         createMemberRow(team, table, member );
    
        }
    }
}

 function createMemberRow(team, table, member) {
     let row = table.insertRow(2);
     row.insertCell(0).innerHTML = member.name;
     row.insertCell(1).innerHTML = member.position
    let actions = row.insertCell(2);
    actions.apprendChild(createDeleteRowButton(haircut, member));
 }
 
 function createDeleteRowButton(haircut, member) {
    let btn = document.createElement('button');
    btn.innerHTML = 'DELETE';
    btn.onclick = () => {
      let index = haircut.members.indexOf(member);
      haircut.member.splice(index, 1);
      drawDOM();
    };
 }

  function createDeleteHaircutButton(haircut) {
      let btn = document.createElement('button');
      btn.className = 'btn  btn-primary';
      btn.innerHTML = "DELETE Haircut";
      btn.onclick = () => {
         let index = haircuts.IndexOf(haircut);
         haircut.member.splice(index, 1);
         drawDOM(); 
         };
      return btn;

    }

    function createNewMemberButton(haircut) {
        let btn = document.createElement('button');
        btn.className = 'btn btn-primary';
        btn.innerHTML = 'Create';
        btn.onclick = () => {
            haircut.members. push(new Member(getValue(`name-input-${haircut.id}`), getValue(`position-input-${haircut.id}`)));
         drawDOM();
         return btn;
     }
  
    function createHaircutTable(haircut) {
     let table = document.createElement('table');
     table.setAttribute('class', 'table table-dark' 'table striped');
     let row = table.insertRow(0);
     let nameColumn = document.createElement('th');
     let positionColumn= document.createElement('th');
     nameColumn.innerHTML = 'Name';
     positionColumn.innerHTML = 'Position';
     row.apprendChild(nameColumn);
     row.apprendChild(positionColumn);
     let formRow = table.insertRow(1);
     let nameTH = document.createElement('th');
     let positionTH = document.createElement('th'); 
     let createTH = document.createElement('th');
     let nameInput = document.createElement('input');
     nameInput.setAttribute('id' `name-input-${haircut.id}`);
     nameInput.setAttribute('type', 'text');
     nameInput.setAttribute('class','form-control');
     let positionInput = document.createElement('input');
     positionInput.setAttribute('id', `position-input-${haircut.id}`);
     positionInput.setAttribute('type', 'text');
     positionInput.setAttribute('class', 'form-control');
     let newMemberButton = createNewMemberButton(haircut);
     nameTh.apprendChild(nameInput);
     positionTH.apprendChild(positionInput);
     createTh.apprendChild(newMemberButton);
     formRow.apprendChild(nameTh);
     formRow.apprendChild(positionTh);
     formRow.apprendChild(createTh);
  }

    
 
    function clearElement(element);
        while(element.firstchild) {
          element.removeChild(element.firstchild);
          return table;
    }      
}
