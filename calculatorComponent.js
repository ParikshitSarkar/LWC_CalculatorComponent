import { LightningElement, track } from 'lwc';

export default class CalculatorComponent extends LightningElement {

    @track result = '' ; 
    //@track isClicked = false; 

    clear(){
        this.result = ''; 
    }

    dispVal(event){
        /*if(this.isClicked){
            this.result = ''; 
            this.isClicked = false; 
        }*/
        this.result += event.target.value ;
        console.log('result val ========= ',this.result); 
    }

    
    doDivide(){
        console.log('exec div func -------');
        let fPart = parseFloat( this.result.split('/')[0]); 
        let sPart = parseFloat( this.result.split('/')[1]); 
        this.result = fPart / sPart; 
        console.log('final result ====== ', this.result );
    }

    doMult(){
        
        let fPart = parseFloat( this.result.split('*')[0]); 
        let sPart = parseFloat( this.result.split('*')[1]); 
        this.result = fPart * sPart; 
        console.log('final result ====== ', this.result );
    }


    doAdd(){
        let fPart = parseFloat( this.result.split('+')[0]); 
        let sPart = parseFloat( this.result.split('+')[1]); 
        this.result = fPart + sPart; 
        console.log('final result ====== ', this.result );
    }
    doSubstract(){
        let fPart = parseFloat( this.result.split('-')[0]); 
        let sPart = parseFloat( this.result.split('-')[1]); 
        this.result = fPart - sPart; 
        console.log('final result ====== ', this.result );
    }

    getResult(){
        //this.isClicked = true; 
        if(this.result.includes('/')){
            this.doDivide(); 
        }else if(this.result.includes('*')){
            this.doMult(); 
        }else if(this.result.includes('+')){
            this.doAdd(); 
        }else if(this.result.includes('-')){
            this.doSubstract();
        }else{
            this.result; 
        }
    }
}