var responseDiv = document.body.querySelector(".response");
var textDiv = document.body.querySelector(".text");
var char = /[a-zA-Z]/g;
var gradesList = document.createElement("div");
gradesList.innerHTML = "";
var list = [];

// username is cool
// password is password
document.body.querySelector(".button").addEventListener("click", function() {
    var textUser = document.body.querySelector(".input").value;
    var textPass = document.body.querySelector(".inputPass").value;
    if(textUser !== "cool") {
        textDiv.innerHTML = "This is not a valid username or password.";
    } else if(textPass !== "password") {
        textDiv.innerHTML = "This is not a valid username or password.";
    } else {
        responseDiv.innerHTML = "";
        textDiv.innerHTML = "";
        renderPages();
    }
});

function renderPages() {
    var pages = ["Grade View", "Add Grade"];
    function createNav() {
        var nav = document.createElement("nav");
        createButton(pages[0]);
        createButton(pages[1]);

        document.body.appendChild(nav);

        // creates the buttons
        function createButton(pg) {
            var button = document.createElement("button");
            button.innerHTML = pg;
            button.addEventListener("click", function() {
                navigate(pg);
            });
            nav.appendChild(button);
        }
    }

    // creates the wrapper
    function createWrapper() {
        var wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        document.body.appendChild(wrapper);
    }

    // navigates the pages
    function navigate(pg) {
        if(pg === "Grade View") { // CASE SENSITIVE
            viewPage();
        } else if(pg === "Add Grade") {
            addPage();
        }
    }

    // renders the array list of grades
    function renderList() {
        gradesList.innerHTML = "";
        for (let i = 0; i < list.length; i++) {
            let ele = document.createElement("div");
            ele.innerHTML = list[i];
            gradesList.appendChild(ele);
        }
    }

    // this is the home page where grades show
    function viewPage() {
        var wrapper = document.body.querySelector(".wrapper"); // works bc this var is exclusive to this function
        wrapper.innerHTML = "";
        var header = document.createElement("h1");
        var info = document.createElement("div");
        header.innerHTML = "Grade View";
        info.appendChild(gradesList);
        wrapper.appendChild(header);
        wrapper.appendChild(info);
        renderList();
    }

    // this is the page where you add grades
    function addPage() {
        var wrapper = document.body.querySelector(".wrapper"); // works bc this var is exclusive to this function
        wrapper.innerHTML = "";

        var header = document.createElement("h1");
        header.innerHTML = "Submit grades";

        var input = document.createElement("input");
        input.setAttribute('type', 'text');
        input.placeholder = "Student name";

        var gradeNum = document.createElement("input");
        gradeNum.classList.add("gradeNum");
        gradeNum.setAttribute('type', 'text');
        gradeNum.placeholder = "Grade (0-100)";

        var gradesButton = document.createElement("button");
        gradesButton.innerHTML = "Submit grade.";
        gradesButton.addEventListener("click", function () {
            if (isNaN(gradeNum.value) && char.test(input.value)) {
                gradesList.innerHTML = "Be sure to write a number!";
            } else if (input.value.length === 0) {
                gradesList.innerHTML = "Don't forget to write the student's name!";
            } else if (gradeNum.value.length === 0) {
                gradesList.innerHTML = "Don't forget to add the student's grade!";
            } else {
                var pushThis = input.value + " | Grade: " + gradeNum.value + "%";
                list.push(pushThis);
                viewPage();
            }
        });

// append everything aaa
        wrapper.appendChild(header);
        wrapper.appendChild(input);
        wrapper.appendChild(gradeNum);
        wrapper.appendChild(gradesButton);
        wrapper.appendChild(ele);
        wrapper.appendChild(gradesList);
    }


    createNav();
    createWrapper(); // have wrapper on bottom so it's below nav
    navigate("Grade View"); // has grade view as default
}

// when add item to list that is a json object
// DO NOT DO NUMBER INPUT