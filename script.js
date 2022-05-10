/**
     * This is just a fiction!
     * this piece of code is used to write the repeated html structure of the game
     * the output will look like:
     *
     * <input type="checkbox" class="cube cube_0 level_0">
     * <input type="checkbox" class="cube cube_1 level_0">
     * <input type="checkbox" class="cube cube_2 level_0">
     * <input type="checkbox" class="cube cube_3 level_0">
     * <input type="checkbox" class="cube cube_0 level_1">
     * <input type="checkbox" class="cube cube_1 level_1">......
     */
 var inputs = '';
 for (var i = 0; i <= 10; i++) {
     for (var n = 0; n < (i + 2) * (i + 2); n++) {
         inputs += '<input type="checkbox" class="cube cube_' + n + ' level_' + i + '" />';
     }
 }
 inputs += '<div class="finish">Game Complete!</div>';
 document.getElementById('game').innerHTML = inputs;