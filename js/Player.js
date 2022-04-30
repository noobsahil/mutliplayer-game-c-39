class Player {
  constructor() {

      this.name=null
      this.positionX=0
      this.positionY=0
      this.index=null
  }
  getPlayercount() {

    var playercountRef = database.ref("playercount")
    playercountRef.on("value", function (data) {
      playercount = data.val()
    })


  }
  updatecount(count) {
    database.ref("/").update({
      playercount: count
    })
  }

  addPlayers(){
    var playerIndex= "players/player"+ this.index
    if(this.index ===1){
      this.positionX = width/2 -100
    }
    else{
      this.positionX = width / 2+100
  }

  database.ref(playerIndex).set({
    name: this.name,
    positionX: this.positionX,
    positionY: this.positionY,
    index:this.index,

  })
  }

  getDistance(){
    var playerDistanceIndex= database.ref("players/player"+ this.index)
    playerDistanceIndex.on("value",(data)=>{
    var cardistance = data.val()
    this.positionX= cardistance.positionX,
    this.positionY= cardistance.positionY
    })
  }

  update(){
    var playerIndex= "players/player"+ this.index
    database.ref(playerIndex).update({
      positionX:this.positionX,
      positionY:this.positionY
    })
  }

  static getPlayerInfo(){
    var getPlayerInfo= database.ref("players")
    getPlayerInfo.on("value",(data)=>{
      allPlayers=data.val()
    })

  }
}
