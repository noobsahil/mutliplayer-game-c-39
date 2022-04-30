class Game {
  constructor() { }


  getState(){

    var gameStateRef=database.ref("gameState")
    gameStateRef.on("value",function (data){
      gameState = data.val()
    })
  }

  handlelements(){
    form.hide()
    form.titleimage.position(40,50)
    form.titleimage.class("gametitlafterthegame")
  }

  updateState(state){
    database.ref("/").update({
      gameState:state
    })
  }

  start() {
    form= new Form()
    form.display()
    player=new Player()
    player.getPlayercount()

    car1=createSprite(width/2-50,height-100)
    car1.addImage("car1",car1Image)
    car1.scale=0.07

    car2=createSprite(width/2+100,height-100)
    car2.addImage("car2",car2Image)
    car2.scale=0.07

    cars+[car1,car2]
  }

  play(){
  this.handlelements()
  Player.getPlayerInfo()
    if(allPlayers !== undefined){
      image(trackimage,0,-height*5,width,height*5)
    }


  if(keyDown(UP_ARROW)){
    player.positionY+=20
    player.update()
    
  }

    drawSprites()
  }

  end() {




  }
}


