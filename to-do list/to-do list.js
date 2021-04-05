add= document.getElementById("add");

        function getAndUpdate(){
            console.log("updating.....");
            ti= document.getElementById("title").value;
            desc = document.getElementById("description").value;
        
            if(localStorage.getItem('JsonItem') == null){
                JsonArray=[];
                JsonArray.push([ti, desc]);
                localStorage.setItem('JsonItem',JSON.stringify(JsonArray));
            }
            else{
               JsonArrayStr = localStorage.getItem('JsonItem');
               JsonArray = JSON.parse(JsonArrayStr);
               JsonArray.push([ti , desc]);
               localStorage.setItem('JsonItem',JSON.stringify(JsonArray))
            }
            document.getElementsByClassName("btn").innertext= 'delete';
            update();
        }

        function update(){
            if(localStorage.getItem('JsonItem') == null){
                JsonArray=[];
                localStorage.setItem('JsonItem',JSON.stringify(JsonArray));
            }
            else{
               JsonArrayStr = localStorage.getItem('JsonItem');
               JsonArray = JSON.parse(JsonArrayStr);
            }

                //populate the table
            let tableBody= document.getElementById("tabod");
            let str = "";
            
            JsonArray.forEach((element,index) => {
                str+= `
                <tr>
                <th scope="rows">${index + 1} </th>
                <td>${element[0]} </td>
                <td>${element[1]} </td>
                <td><button class="delete btn" onclick= 'deleted(${index})'> delete</button></td>
                </tr>
                `                
            });
            tableBody.innerHTML =str;   
        }
        
        add = document.getElementById("add");
        add.addEventListener('click',getAndUpdate);
        update();

        function deleted(itemindex) {
            console.log('Delete',itemindex);
            JsonArrayStr = localStorage.getItem('JsonItem');
            JsonArray = JSON.parse(JsonArrayStr);
           
            //delete itemindex element fromt the  array
            JsonArray.splice(itemindex,1);
            localStorage.setItem('JsonItem',JSON.stringify(JsonArray));
            update();
        }

      
