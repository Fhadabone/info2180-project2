
//x and y coordinates of empty space
var x = '300px';
var y = '300px';
window.onload = function()
{
	//contains all puzzle tiles
	var puzzleArea = document.getElementById('puzzlearea');
	//get all the puzzle pieces
	puzzle = puzzleArea.getElementsByTagName('div');
	//shuffle
	var shuffle = document.getElementById('shufflebutton');

	for(var tile = 0; tile < puzzle.length; tile++)
	{
		//set up the board w/ background
		puzzle[tile].style.backgroundImage = "url('apple.png')";
		puzzle[tile].className = 'puzzlepiece';
		puzzle[tile].style.left = (tile%4*100)+'px';
		puzzle[tile].style.top = (parseInt(tile/4)*100)+'px';
		puzzle[tile].style.backgroundPosition= '-' + puzzle[tile].style.left + ' ' + '-' + puzzle[tile].style.top;


		//adds hover class
		puzzle[tile].onmouseover = function()
		{
			if(movable(parseInt(this.innerHTML)))
			{
				this.classList.add('movablepiece');
			}
		};
		//remove hover class
		puzzle[tile].onmouseout = function()
		{
			if(movable(parseInt(this.innerHTML)))
			{
				this.classList.remove('movablepiece');
			}

		};
		//moves the tile
		puzzle[tile].onclick = function()
		{
			if(movable(this.innerHTML))
			{
				move(this.innerHTML-1);
			}
		}
	};

	shuffle.onclick = function(){
		shuffleAll();
	};
};


function movable(location)
{
	if(calcL(x,y)==(location-1))
	{
		return true
	}
	else if(calcR(x,y)==(location-1))
	{
		return true
	}
	else if(calcT(x,y)==(location-1))
	{
		return true
	}
	else if(calcB(x,y)==(location-1))
	{
		return true
	}
};
//if tile can be moves right
function calcL(xc,yc)
{
	let xx = parseInt(xc);
	let yy = parseInt(yc);
		for( var tile = 0; tile < puzzle.length; tile++)
		{
			if(parseInt(puzzle[tile].style.left) - 100 ==xx && parseInt(puzzle[tile].style.top)==yy)
			{
				//the tile that is next to the empty slot
				return tile;
			}
		}
}
//if tile can be moved right
function calcR(xc,yc)
{
	let xx = parseInt(xc);
	let yy = parseInt(yc);


	for( var tile = 0; tile < puzzle.length; tile++)
	{
		if(parseInt(puzzle[tile].style.left) + 100 == xx && parseInt(puzzle[tile].style.top)==yy)
		{
			return tile;
		}
	}
}
//if tile can be moved up
function calcT(xc,yc)
{
	let xx = parseInt(xc);
	let yy = parseInt(yc);

	for( var tile = 0; tile < puzzle.length; tile++)
	{
		if(parseInt(puzzle[tile].style.left) ==xx && parseInt(puzzle[tile].style.top)-100 ==yy)
		{
			return tile;
		}
	}	
}
//if tile can be moved down
function calcB(xc,yc)
{
	let xx = parseInt(xc);
	let yy = parseInt(yc);	
	for( var tile = 0; tile < puzzle.length; tile++)
	{
		if(parseInt(puzzle[tile].style.left) ==xx && parseInt(puzzle[tile].style.top) +100 ==yy)
		{
			return tile;
		}
	}	
}
//move the selected tile
function move(elem)
{
	//top position of element
	var elem_pos = puzzle[elem].style.top;
	//put element in empty y coordinate
    puzzle[elem].style.top = y;
    y = elem_pos;
    elem_pos = puzzle[elem].style.left;
    puzzle[elem].style.left = x;
    x = elem_pos;
}


function shuffleAll(){
		
        for (var i=0; i<300; i++)
        {
            var rand = parseInt(Math.random()* 100) %4;
            if (rand == 0)
            {
                var tmp = calcT(x, y);
                if ( tmp != -1)
                {
                    move(tmp);
                }
            }
            if (rand == 1)
            {
                var tmp = calcB(x, y);
                if ( tmp != -1) 
                {
                    move(tmp);
                }
            }

            if (rand == 2)
            {
                var tmp = calcL(x,y);
                if ( tmp != -1)
                {
                    move(tmp);
                }
            }

            if (rand == 3)
            {
                var tmp = calcR(x,y);
                if (tmp != -1)
                {
                    move(tmp);
                }
            }
        }
	};
