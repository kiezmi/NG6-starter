class Input_QuestionController {
  constructor() {
    this.question='';
  }
  onSubmit(){
    console.log("new question");
    this.submit({question:this.question});
    this.question='';
  }
}
 
export default Input_QuestionController;
