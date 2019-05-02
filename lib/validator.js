module.exports = {

    receiveCPF: function (exempleCPF) {
        return exempleCPF
    },

    validateCPF: function () {
        // // Valida 1o digito	
        // add = 0;	
        // for (i=0; i < 9; i ++)		
        // 	add += parseInt(exempleCPF.charAt(i)) * (10 - i);	
        // 	rev = 11 - (add % 11);	
        // 	if (rev == 10 || rev == 11)		
        // 		rev = 0;	
        // 	if (rev != parseInt(exempleCPF.charAt(9)))		
        // 		return false;		
        // // Valida 2o digito	
        // add = 0;	
        // for (i = 0; i < 10; i ++)		
        // 	add += parseInt(exempleCPF.charAt(i)) * (11 - i);	
        // rev = 11 - (add % 11);	
        // if (rev == 10 || rev == 11)	
        // 	rev = 0;	
        // if (rev != parseInt(cpf.charAt(10)))
        // 	return false;		
        return true;

    } 


}



