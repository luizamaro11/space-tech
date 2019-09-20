window.onload = function(){
	//Constantes que armazenam o código de cada seta do teclado
	var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
	var cnv = document.querySelector("canvas");
	var	ctx = cnv.getContext("2d");
	var spriteSheet = new Image();
	spriteSheet.src = "img/img.png";
	var zezim = new Sprite(spriteSheet);
	var scene = new Image();
	scene.src = "img/scene.png";
	var santa = new Image();
	santa.src = "mapa/santa.png";
	var aldeia = new Image();
	aldeia.src = "mapa/aldeia.png";
	var dudusamba = new Image();
	dudusamba.src = "mapa/Dudusamba.png";
	var feiraAgenor = new Image();
	feiraAgenor.src = "mapa/feiraAgenor.png";
	var feiraCentro = new Image();
	feiraCentro.src = "mapa/feiraCentro.png";
	var igreja = new Image();
	igreja.src = "mapa/igeja.png";
	var parqueEcologico = new Image();
	parqueEcologico.src = "mapa/parqueEcologico.png";
	var plataforma = new Image();
	plataforma.src = "mapa/plataforma.png";
	var pocodasantas = new Image();
	pocodasantas.src = "mapa/pocodasantas.png";
	var raulcortez = new Image();
	raulcortez.src = "mapa/raulcortez.png";


	
	window.addEventListener("keydown",keydownHandler,false);
	window.addEventListener("keyup",keyupHandler,false);
	
	function keydownHandler(e){
		switch(e.keyCode){
			case RIGHT:
				zezim.mvRight = true;
				zezim.mvLeft = false;
				zezim.mvUp = false;
				zezim.mvDown = false;
				break;
			case LEFT:
				zezim.mvRight = false;
				zezim.mvLeft = true;
				zezim.mvUp = false;
				zezim.mvDown = false;
				break;
			case UP:
				zezim.mvRight = false;
				zezim.mvLeft = false;
				zezim.mvUp = true;
				zezim.mvDown = false;
				break;
			case DOWN:
				zezim.mvRight = false;
				zezim.mvLeft = false;
				zezim.mvUp = false;
				zezim.mvDown = true;
				break;
		}
	}
	
	function keyupHandler(e){
		switch(e.keyCode){
			case RIGHT:
				zezim.mvRight = false;
				break;
			case LEFT:
				zezim.mvLeft = false;
				break;
			case UP:
				zezim.mvUp = false;
				break;
			case DOWN:
				zezim.mvDown = false;
				break;
		}
	}
	
	//Quano a imagem é carregada, o programa é iniciado
	spriteSheet.onload = function(){
		init();
		zezim.posX = 330, zezim.posY = 240;

	}

	function init(){
		loop();
	}

	function update(){
		zezim.move();
		colid();
	}

	function draw(){
		ctx.clearRect(0,0,cnv.width,cnv.height);
		ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,scene.width,scene.height);
		zezim.draw(ctx);
		ctx.drawImage(santa,990,40,150,110);
		ctx.drawImage(aldeia,180,5,150,110);
		ctx.drawImage(dudusamba,740,380,270,210);
		ctx.drawImage(feiraAgenor,240,420,150,110);
		ctx.drawImage(feiraCentro,980,300,150,110);
		ctx.drawImage(igreja,740,220,150,110);
		ctx.drawImage(parqueEcologico,1,230,150,110);
		ctx.drawImage(plataforma,20,460,150,110);
		ctx.drawImage(pocodasantas,450,2,210,150);
		ctx.drawImage(raulcortez,500,280,150,110);
		

		
	}

	function loop(){
		window,requestAnimationFrame(loop,cnv);
		update();
		draw();
	}

	function colid(){
		if(zezim.posX + zezim.width > 1 &&
			zezim.posX < 1 + 150 &&
			zezim.posY + zezim.height > 230 &&
			zezim.posY < 230 + 110){
			document.getElementById("modZoo").showModal(); 
		}
		else{
			modZoo.close();	
		}

		if(zezim.posX + zezim.width > 990 &&
			zezim.posX < 990 + 150 &&
			zezim.posY + zezim.height > 40 &&
			zezim.posY < 40 + 110){
			document.getElementById("modSanta").showModal(); 
		}
		else{
    		modSanta.close();
		}

		if(zezim.posX + zezim.width > 180 &&
			zezim.posX < 180 + 150 &&
			zezim.posY + zezim.height > 5 &&
			zezim.posY < 5 + 110){
			document.getElementById("modAldeia").showModal(); 
		}
		else{
			modAldeia.close();
		}

		if(zezim.posX + zezim.width > 740 &&
			zezim.posX < 740 + 210 &&
			zezim.posY + zezim.height > 380 && 
			zezim.posY < 380 + 270){
			document.getElementById("modDudusamba").showModal(); 
		}
		else{
    		modDudusamba.close();
		}

		if(zezim.posX + zezim.width > 240 &&
			zezim.posX < 240 + 150 &&
			zezim.posY + zezim.height > 420 &&  
			zezim.posY < 420 + 110){
			document.getElementById("modFeiraagenor").showModal(); 
		}
		else{
			modFeiraagenor.close();
		}

		if(zezim.posX + zezim.width > 980 &&
			zezim.posX < 980 + 150 &&
			zezim.posY + zezim.height > 300 &&
			zezim.posY < 300 + 110){
			document.getElementById("modFeiracentro").showModal(); 
		}
		else{
			modFeiracentro.close();
		}

		if(zezim.posX + zezim.width > 740 &&
			zezim.posX < 740 + 150 &&
			zezim.posY + zezim.height > 220 &&
			zezim.posY < 220 + 110){
			document.getElementById("modIgreja").showModal(); 
		}
		else{
			modIgreja.close();
		}

		if(zezim.posX + zezim.width > 20 &&
			zezim.posX < 20 + 150 &&
			zezim.posY + zezim.height > 460 &&
			zezim.posY < 460 + 110){
			document.getElementById("modPlataforma").showModal(); 
		}
		else{
			modPlataforma.close();
		}

		if(zezim.posX + zezim.width > 450 &&
			zezim.posX < 450 + 210 &&
			zezim.posY + zezim.height > 2 &&
			zezim.posY < 2 + 150){
			document.getElementById("modPocodasantas").showModal(); 
		}
		else{
			modPocodasantas.close();
		}

		if(zezim.posX + zezim.width > 500 &&
			zezim.posX < 500 + 150 &&
			zezim.posY + zezim.height > 280 &&
			zezim.posY < 280 + 110){
			document.getElementById("modRaulcortez").showModal(); 
		}
		else{
			modRaulcortez.close();
		}


	}
}
