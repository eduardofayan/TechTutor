        /*FUNCTION BACK TO TOP */
        function returnTop() {
            const returnTopButton = document.querySelector('.description') /*seleciona a classe */

            if (window.scrollY >= 260) {
                /*em que momento do scroll vai ocorrer a ação*/
                returnTopButton.classList.add('show') /*é adicionado a classe show */
            } else {
                returnTopButton.classList.remove('show') /*é retirado a classe show */
            }
        }

        /*quando usar o Scroll*/
        window.addEventListener('scroll', function() {
            returnTop()
        })