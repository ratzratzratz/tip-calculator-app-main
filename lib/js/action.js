'use strict';
$(document).ready(function($){
function calculation(){
    $('input[type=reset]').removeClass('cameleon');
    var bill_amount = $('#bill').eq(0).val();
    var number_people = $('#people').eq(0).val();
    var tip_procent = $('.active').eq(0).val();
    if(bill_amount, number_people, tip_procent){
        bill_amount = parseInt(bill_amount);
        number_people = parseInt(number_people);
        tip_procent = parseInt(tip_procent);
        let final_bill_pP = (((bill_amount * tip_procent)/100) + bill_amount)/number_people;
        let final_tip_pP = ((bill_amount * tip_procent)/100) / number_people;
        if(isNaN(final_bill_pP) || isNaN(final_tip_pP)){
            $('.tip_amount').empty().append('0.00');
            $('.total_amount').empty().append('0.00');
        }
        else if(final_tip_pP===Infinity || final_bill_pP === Infinity){
            $('.tip_amount').empty().append('0.00');
            $('.total_amount').empty().append('0.00');
        }
        else{
            final_tip_pP = final_tip_pP.toPrecision(3);
            final_bill_pP = final_bill_pP.toPrecision(3);
            $('.tip_amount').empty().append(final_tip_pP);
            $('.total_amount').empty().append(final_bill_pP); 
        }
    }
}
function clearInput(e){
    if($(e.target).val() === '0'){
        $(e.target).val('');
    }
}
function setActive(e){
    $('input[type=reset]').removeClass('cameleon');
    var tip_procent = this.value;
    $('.active').removeClass('active');
    $(e.target).addClass('active');
    
    if(tip_procent=='Custom'){
        $('input[type=text]').eq(1).val('');
    }
}
function reset(){
    $('input[type=reset]').addClass('cameleon');
    $('.active').removeClass('active');
    $('.tip_amount').empty().append('0.00');
    $('.total_amount').empty().append('0.00');
}
function validNumber(){
    var inputNumber = $(this).val();
    if(inputNumber === '0' || !$.isNumeric(inputNumber)){
        $('.alarmtext').empty();
        $('#people').empty().append('0').addClass('alarm');
        var alarmtext = `<p class="alarmtext">Has to be a number.</p>`;
        $('#people').after(alarmtext);
    }else{
        $('#people').removeClass('alarm').removeClass('alarmtext');
        $('.alarmtext').empty();
    }
}
// CLICKHANDLER
$('.col').on('click', setActive);
$('.values').on('change',calculation);
$('.values').on('click',calculation);
$('input[type=reset]').on('click', reset);
$('#people').on('change', validNumber);
$('#people').on('click', clearInput);
$('#bill').on('click', clearInput);

$('input[type=reset]').addClass('cameleon');
});



