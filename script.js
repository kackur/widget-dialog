// Funktion för att stänga dialogrutan
function closeDialog() {
    document.getElementById('dialogBox').style.display = 'none';
}

// Stänger dialogrutan efter 10 sekunder
setTimeout(closeDialog, 10000);

// Lägger till klickhändelse för att manuellt stänga rutan
document.getElementById('closeButton').addEventListener('click', closeDialog);
