 function shogi(str) {
            let strArr = [];
            let encStrArr = [];
            let encStr, char;

            str = str.toLocaleLowerCase();
            strArr = str.split("");

            for (i = 0; i < strArr.length; i++) {
                switch (strArr[i]) {

                    case "a":
                        char = "0000";
                        break;
                    case "b":
                        char = "0001";
                        break;
                    case "c":
                        char = "0002";
                        break;
                    case "d":
                        char = "0003";
                        break;
                    case "e":
                        char = "0010";
                        break;
                    case "f":
                        char = "0011";
                        break;
                    case "g":
                        char = "0012";
                        break;
                    case "h":
                        char = "0013";
                        break;
                    case "i":
                        char = "0020";
                        break;
                    case "j":
                        char = "0021";
                        break;
                    case "k":
                        char = "0022";
                        break;
                    case "l":
                        char = "0023";
                        break;
                    case "m":
                        char = "0030";
                        break;
                    case "n":
                        char = "0031";
                        break;
                    case "o":
                        char = "0032";
                        break;
                    case "i":
                        char = "0033";
                        break;
                    case "p":
                        char = "0040";
                        break;
                    case "q":
                        char = "0041";
                        break;
                    case "r":
                        char = "0042";
                        break;
                    case "s":
                        char = "0043";
                        break;
                    case "t":
                        char = "0050";
                        break;
                    case "u":
                        char = "0051";
                        break;
                    case "v":
                        char = "0052";
                        break;
                    case "w":
                        char = "0053";
                        break;
                    case "x":
                        char = "0060";
                        break;
                    case "y":
                        char = "0061"
                        break;
                    case "z":
                        char = "0062";
                        break;

                    case " ":
                        char = "9000";
                        break;

                    case "0":
                        char = "0100";
                        break;
                    case "1":
                        char = "0101";
                        break;
                    case "2":
                        char = "0102";
                        break;
                    case "3":
                        char = "0103";
                        break;
                    case "4":
                        char = "0120";
                        break;
                    case "5":
                        char = "0121";
                        break;
                    case "6":
                        char = "0122";
                        break;
                    case "7":
                        char = "0123";
                        break;
                    case "8":
                        char = "0130";
                        break;
                    case "9":
                        char = "0131";
                        break;


                    default:
                        char = "9999";
                        break;
                }
                encStrArr.push(char);

            }
            encStr = "";
            for (i = 0; i < encStrArr.length; i++) {
                encStr += String(encStrArr[i]);

            }
            return encStr;
        }
