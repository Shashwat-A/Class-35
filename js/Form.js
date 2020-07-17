class Form{
    constructor() {

    }

    display() {
        //to type yhe title
        var title = createElement('h2');
        title.html("Car Racing Game!!");
        title.position(130,0);

        //to give the name or input
        var input = createInput("Name");
        input.position(130,160);

        //to give sumbit button
        var button = createButton('Play');
        button.position(250,200);

        //to make a variable in which greeting will be stored
        var greeting = createElement('h3');    

        //function for working of button on clicking
        button.mousePressed(function(){
            //
            input.hide();
            button.hide();

            var name = input.value();
            playerCount +=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello " + name);
            greeting.position(130,160)
        })
    }
}