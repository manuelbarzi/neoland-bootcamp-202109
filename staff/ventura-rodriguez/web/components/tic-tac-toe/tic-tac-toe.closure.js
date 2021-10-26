var ticTacToe = (function () {

    //  Describe function for create players
        function Player(_alias, _mark) {
            var alias = _alias;
            var wins = 0;
            var mark = _mark;
            return({
                getAlias: function() {return alias},
                setAlias: function(x) {alias = x; return this.getAlias()},
                getWins: function() {return wins},
                setWins: function(x) {wins = x; return this.getWins()},
                getMark: function() {return mark},
                setMark: function(x) {mark = x; return mark},
                info: function() {return({alias, wins, mark})}
            })
        }
    
    //  Properties of TicTacToe estructure
        var initialized = false;
        var player1;
        var player2;
        var firstMove;
        var steps;
        var ready = false;
    
        var matrix = [];
    
    //  Getters and setters
    
        function getInitialized() {
            return initialized;
        }
    
        function setInitialized(x) {
            initialized = x;
            return getInitialized();
        }
    
        function getTable() {
            return matrix;
        }
    
        function setTable(table) {
            matrix = table;
            return getTable();
        }
    
        function getReady() {
            return ready;
        }
    
        function setReady(_ready) {
            ready = _ready;
            return getReady();
        }
        
        function getPosition(x, y) {
            return matrix[x][y];
        }
    
        function setPosition(value, x, y) {
            matrix[x][y] = value;
            return getPosition(x, y);
        }
    
        function getSteps() {
            return steps;
        }
    
        function setSteps(_steps) {
            steps = _steps;
            return getSteps();
        }
    
        function getFirstMove() {
            return firstMove;
        }
    
        function setFirstMove(player) {
            firstMove = player;
            return getFirstMove();
        }
    
    //  Private functions
        function addStep() {
            steps++;
            return getSteps();
        }
    
        function turn() {
            var bool = (getSteps() % 2 !== 0);
            return((
                (getFirstMove() === player1 && bool) ||
                (getFirstMove() === player2) && !bool) ? 
                player1 : player2
            )
        }
    
        function checkMovement(value, x, y) {
            return (matrix[x][y] === null && value !== null);
        }
    
        function checkWin(mark) {
            var bool = false;
            switch(true) {
                case (matrix[0][0] === mark && matrix[0][1] === mark && matrix[0][2] === mark) : bool = true; break;
                case (matrix[1][0] === mark && matrix[1][1] === mark && matrix[1][2] === mark) : bool = true; break;
                case (matrix[2][0] === mark && matrix[2][1] === mark && matrix[2][2] === mark) : bool = true; break;
                
                case (matrix[0][0] === mark && matrix[1][0] === mark && matrix[2][0] === mark) : bool = true; break;
                case (matrix[0][1] === mark && matrix[1][1] === mark && matrix[2][1] === mark) : bool = true; break;
                case (matrix[0][2] === mark && matrix[1][2] === mark && matrix[2][2] === mark) : bool = true; break;
             
                case (matrix[0][0] === mark && matrix[1][1] === mark && matrix[2][2] === mark) : bool = true; break;
                case (matrix[0][2] === mark && matrix[1][1] === mark && matrix[2][0] === mark) : bool = true; break;
            }
            return bool;
        }
    
        function resetPattern() {
            setFirstMove((Math.round(Math.random())) ? player1 : player2);
            setSteps(0);
            setTable([[null, null, null],[null, null, null], [null, null, null]]);
            setReady(true);
            return sendInfo();
        }
    
        function sendInfo() {
            return ({
                player1: player1.info(),
                player2: player2.info(),
                table: getTable(),
                nextTurn: turn().info(),
                steps: getSteps()
            })
        }
    
    //  Closures functions
        return({
            createTable: function(aliasPlayer1, aliasPlayer2) {
                var res;
                if (!getInitialized()) {
                    
                    setInitialized(true);
                    player1 = Player(aliasPlayer1, !!Math.round(Math.random()));
                    player2 = Player(aliasPlayer2, !player1.getMark());
                    res = resetPattern();
                }
                else res = sendInfo();
                return res;
            },
            showTable: sendInfo,
            gameMovement: function(x, y) {
                var bool = false;
                if(getReady()) {
                    var player = turn();
                    var mark = player.getMark();
                    if(checkMovement(mark, x, y)) {
                        setPosition(mark, x, y);
                        addStep();
                        bool = (getSteps() > 4 && checkWin(mark));
                    }
                    if(bool) {
                        player.setWins(player.getWins() + 1);
                        ready = false;
                    }
                }
                return ({
                    win: bool,
                    steps: getSteps(),
                    table: getTable(),
                    nextTurn: (ready) ? turn().info() : {}
                })
            },
            newGame: function() {
                return (!getReady()) ? this.resetGame() : {};
            },
            resetGame: function() {
                var res = {};
                if(getReady()) {
                    player1.setMark(!!Math.round(Math.random()));
                    player2.setMark(!player1.getMark());
                    res = resetPattern();
                }
                return res;
            },
            resetTable: function(aliasPlayer1, aliasPlayer2) {
                var res = {};
                if (getInitialized()) {
                    player1 = Player(aliasPlayer1, !!Math.round(Math.random()));
                    player2 = Player(aliasPlayer2, !player1.getMark());
                    res = resetPattern();
                }
                return res;
            },
            settings: {
                changeAliasPLayer1: function (_alias) {
                    player1.setAlias(_alias);
                    return player1.info();
                },
                changeAliasPLayer2: function (_alias) {
                    player2.setAlias(_alias);
                    return player2.info();    
                }
            }
        })
    })()
    