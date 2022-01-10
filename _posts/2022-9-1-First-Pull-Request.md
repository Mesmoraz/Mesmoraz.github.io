![Zangief and Chun Li Hitbox](_images/zangief-chun-li-boxes.jpg)

# My first _big_ Pull Request

Taking inspiration and logical idea process from a ![YouTuber](https://www.youtube.com/channel/UCaBzS42OLX5FQ7tz-HhF3RA), I was able to implement a hitbox collision system using Interfaces and Enums in C#. This was one of the most challenging tasks
I've done on my own and I feel really accomplished because of it!

I want to share with the world the process I took and reflect on my time developing such interface so that next time I'm able to start further ahead than where I was before :)

### The Task
Create Hitboxes and Hurtboxes so that collision happens in it's own system.

Sounds easy enough? My first thought was to create two classes called "Hitbox" and "Hurtbox" and just have the two scripts speak to each other. The problem, right away, is 
this becomes convoluted within the game system and is not stand alone.

This lead my to thinking that, well if I need another place for collision computation to occur, I'll need it's own file - in this case the file was named "Collision Controller".

Easy enough, now inside this file, all of the logic needs to happen at the 'highest' level possible. So that the interface is implementing the way the data communicates first.

Googling, thinking and using _ahem_ creative endeavors in order to fuel my search, this took me some time to figure out and learn...

### Implementation and Understanding

The next parts of my journey involved the creation of these different interfaces. I understood that I needed to create four interface structures each for the different parts communicating. 
The trickiest part, though, was an explination I heard/read where the interfaces were used as a way to validate a possible hit occuring. This was all coded inside of the `HitData` class 
that I created inside of the larger Collision Controller script. 

_What I learned_
- Implementing logical ideas from the internet is not as easy as copy and pasting
- Interfaces are really useful
- Validating collisions is an artform 
- Game engines are actually still really simple peices of technology!

### Explaining what I did and my Code to the Team

Wow - this was way more difficult than I imagined the first time. I thought, oh I'll just talk through it with the team and it'll be easy. I'm a teacher and I do this every day anyway. Girl - 
was as wrong as ever. speaking through the code that took me a couple of weeks to fully understand and create into a working prototype - explaining this in a 10 minute chunk of presentation
would be next to impossible. My colleagues were kind, receptive and patient but I was not able to clearly articulate nor anticipate what their questions were going to be! _some of us were on different pages to be fair to me_

I went through step by step of the code, feeling overwhelmed and that I was 'boring'? I thought it was interesting, is it always neccessary for the presenter to make their content entertaining or engaging
for an audience - as a teacher that was certainly true. I don't know what that means for private sector life though. 

I think we can all agree a more engaging meeting is more pleasing to listen to and to be apart of than a non-engaging meeting. Though sometimes, I like to just listen and be spoken to,
different strategies for different times I suppose.

Here is some of the implementation - this is directly influenced by the Youtuber link above. I followed his logic to implement but did it on my own.

Feedback is always welcome!

```C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HitData
{
    public float damage;
    public IHurtbox hurtBox;
    public IHitBox hitBox; 

    public bool Validate()
    {

        if(hurtBox != null)    
        {
            if (hurtBox.Checkhit(this))   
            {
                if (hurtBox.hurtResponder == null || hurtBox.hurtResponder.CheckHit(this))  
                {       
                    if (hitBox.hitResponder == null || hitBox.hitResponder.CheckHit(this)) 
                    {                       
                        return true;
                    }
                }   
            }   
        }

        return false;
    }
}

public enum HurtBoxType
{
    Player = 1  <<  0,
    Enemy  = 1  <<  1,
    Ally   = 1  <<  2
}
[System.Flags]
public enum HurtboxMask
{
    None    = 0,      // 0000b
    Player  = 1 << 0, // 0001b
    Enemy   = 1 << 1, // 0010b
    Ally    = 1 << 2  // 0100b
}


public interface IHitResponder
{

    float Damage { get; }

    public bool CheckHit(HitData hitData);

    public void Response(HitData hitData);
}

public interface IHitBox
{
    public IHitResponder hitResponder { get; set; }
    public void CheckHit();
}
public interface IHurtResponder
{
    public bool CheckHit(HitData hitData);
    
    public void Response(HitData hitData);
}
public interface IHurtbox
{
    public bool Active { get; }  
    public GameObject Owner { get; }
    public Transform Transform { get; }
    public HurtBoxType Type { get; }
    public IHurtResponder hurtResponder { get; set; }
    public bool Checkhit(HitData hitData);

}
```

