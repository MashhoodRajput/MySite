
const typeWriter = function(textElement, words, wait) {
    this.textElement = textElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}
//Type Method
typeWriter.prototype.type = function() {

    //Current Index of Word
    const current = this.wordIndex % this.words.length;
    //Get full text of current Word
    const fullText = this.words[current];
    //Check if deleting
    if (this.isDeleting) {
        //Remove Char
        this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
        //Add Char
        this.txt = fullText.substring(0, this.txt.length + 1);

    }
    this.textElement.innerHTML = `<span class="typwriterText">${this.txt}</span>`;

    //Initial speed
    let typeSpeed = 100;
    if (this.isDeleting) {
        // This is short of typeSpeed = typeSpeed/2;
        typeSpeed /= 2;
    }

    //if word is completed
    if (!this.isDeleting && this.txt === fullText) {
        //Make pause at the end
        typeSpeed = this.wait;

        // set delte to true
        this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        //Move to next word
        this.wordIndex++;
        // pause before typing
        typeSpeed = 500
    }

    setTimeout(() => this.type(), typeSpeed)
}
//Init on DOM Load
document.addEventListener('DOMContentLoaded', init)

//Init App
function init() {
    const textElement = document.querySelector('[data-text]');
    const words = ['WEBDEVELOPERS..', 'YOUTUBE SOURCECODE..', "JSCODELEARNER'S.."];
    const wait = 3000;

    //Init typeWriter
    new typeWriter(textElement, words,  wait);
}

class formValidator{
		constructor(form, fields){
			this.form = form,
			this.fields = fields
		}

initialization(){
	this.validateOnSubmit();
	this.validateOnEntry();
}
		validateOnSubmit(){
			let self = this;
			self.form.addEventListener('submit', e =>{
				e.preventDefault();
				self.fields.forEach(field =>{
						const input = document.querySelector(`[data-${field}]`);
						self.validateFields(input);
				});
			});
		}

		validateOnEntry(){
			let self = this;
			self.fields.forEach(field =>{
				 const input = document.querySelector(`[data-${field}]`);
				input.addEventListener('input', event =>{
					self.validateFields(input);
				});
			});
		}

		validateFields(field){
			if(field.value.trim() ===""){

				this.setStatus(field, `${field.previousElementSibling.innerText} can not be blank`, "error");
			}
			else {
				this.setStatus(field, null, 'sucess');
			}
			if(field.type == 'textarea'){

				if((field.value.length < 50)){
					this.setStatus(field, `The ${field.previousElementSibling.innerText} field must have no less than 50 characters.`, "error");
				}
				else {
					this.setStatus(field, null, 'sucess');
				}
			}

			if(field.type == 'email'){
				const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,3})+$/;
				if(re.test(field.value)){
					this.setStatus(field, null, 'sucess')
				}
				else {
					this.setStatus(field, 'Please enter Valid Email Address', 'error');
				}
			}
		}
		setStatus(field, message, status){
			const sucess = document.querySelector('.sucess');
			const errorMessage = document.querySelector('.errorMessage');
			const errorMessageShow = field.nextElementSibling.querySelector('.errorMessageShow');

			if(status === 'sucess'){
				field.classList.add('sucess');
				if(errorMessage){field.classList.remove('errorMessage')};
				if(errorMessageShow){errorMessageShow.innerText = ''};

			}
			if(status === 'error'){
				field.classList.add('errorMessage');
				errorMessageShow.innerHTML = message;
			}
		}
}
const contactForm = document.querySelector('[data-form]');
const intputs = ['firstName', 'lastName', 'email', 'message'];

const Validation = new formValidator(contactForm, intputs);

		Validation.initialization();
