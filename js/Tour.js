AFRAME.registerComponent("tour",{
    init:function(){
        this.placesContainer=this.el
        this.createCards()
    },

    createCards:function(){
        const thumbNailRef=[
        {
            id:"budapest",
            title:"Budapest",
            url:"../assets/thumbnails/budapest.jpg",
        },
        {
            id:"eiffel-tower",
            title:"Eiffel Tower",
            url:"../assets/thumbnails/eiffel_tower.jpg", 
        },
        {
            id:"new-york-city",
            title:"New York City",
            url:"../assets/thumbnails/new_york_city.png", 
        },
        {
            id:"taj-mahal",
            title:"Taj Mahal",
            url:"../assets/thumbnails/taj_mahal.png", 
        },
    ];

    let previousXposition=-60;
    for(var item of thumbNailRef){
        const posX=previousXposition+25
        const posY=10
        const posZ=-40
        const position={x:posX,y:posY,z:posZ}
        previousXposition=posX

        const borderEl=this.createBorder(position,item.id)
        const thumbnail=this.createThumbnail(item)
        borderEl.appendChild(thumbnail)

        const titleEl=this.createTitleEl(position,item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl)
    }
    },

    createBorder:function(position,id){
        const entityel=document.createElement("a-entity");
        entityel.setAttribute("id",id)
        entityel.setAttribute("visible",true)
        entityel.setAttribute("position",position)
        entityel.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
        entityel.setAttribute("material",{color:"red",opacity:1})
        entityel.setAttribute("cursor-listener",{})
        return entityel

    },

    createThumbnail:function(item){
        const entityel=document.createElement("a-entity");
        entityel.setAttribute("visible",true)
        entityel.setAttribute("geometry",{primitive:"circle",radius:9})
        entityel.setAttribute("material",{src:item.url})
        return entityel
    },

    createTitleEl:function(position,item){
        const entityel=document.createElement("a-entity");
        entityel.setAttribute("visible",true)
        entityel.setAttribute("position",position)
        entityel.setAttribute("text",{font:"exo2bold",align:"center",width:70,color:"black",value:item.title})
        const elposition=position
        elposition.y=-20
        entityel.setAttribute("position",elposition)
        return entityel

    }

})