const faqData = [
    {
        id: 1,
        question: "Who are we?",
        answer:
            "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
    },
    {
        id: 2,
        question: "What do we do?",
        answer:
            "Building learning communities with Our Affordable & Competent Courses",
    },
    {
        id: 3,
        question: "Are the community classes boring?",
        answer: "No, not at all!!!",
    },
];

let accordianBody = document.querySelector(".accordian_body");

function showFaq() {
    for (let item of faqData) {
        let query = `<div class="faq">
                        <div class="faq_header ">
                          <h3>${item.question}</h3>
                          <i class='bx bx-plus show_btn' onclick="btnStatusUpdate(this)"></i>
                        </div>
                        <div class="faq_content hidden">
                          <p>${item.answer}</p>
                        </div>
                    </div>`;
      accordianBody.insertAdjacentHTML("beforeend",query);              
    }
}

// ----- function call here -----
showFaq();

function btnStatusUpdate(ele) {
    let currentElement = ele.parentNode.nextElementSibling;
    currentElement.classList.toggle("hidden");
    ele.classList.contains("bx-plus") ? ele.classList.replace("bx-plus", "bx-minus")
        :ele.classList.replace("bx-minus", "bx-plus");
}