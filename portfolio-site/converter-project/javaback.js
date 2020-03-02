function CelsiusConverter(){
    document.tempconverter.fahrenheit.value = (document.tempconverter.celsius.value * 9 / 5) + 32
    document.tempconverter.kelvin.value = document.tempconverter.celsius.value * 1 + 273.15
    }
function FahrenheitConverter(){
    document.tempconverter.celsius.value = (document.tempconverter.fahrenheit.value - 32) * 5 / 9
    document.tempconverter.kelvin.value=((document.tempconverter.fahrenheit.value - 32)*5/9)+273.15
    }
function KelvinConverter(){
    document.tempconverter.celsius.value = document.tempconverter.kelvin.value - 273.15
    document.tempconverter.fahrenheit.value=((document.tempconverter.kelvin.value - 273.15)*9/5)+32
    }
//Weight Converter
function PoundsConverter(){
    document.weightconverter.ounces.value = document.weightconverter.pounds.value * 16;
    document.weightconverter.kilograms.value= document.weightconverter.pounds.value / 2.2046;
    }
function OuncesConverter(){
    document.weightconverter.pounds.value = document.weightconverter.ounces.value * 0.0625;
    document.weightconverter.kilograms.value = document.weightconverter.ounces.value / 35.274;
    }
function KilogramsConverter(){
    document.weightconverter.ounces.value = document.weightconverter.kilograms.value * 35.274;
    document.weightconverter.pounds.value= document.weightconverter.kilograms.value * 2.2046;
    }