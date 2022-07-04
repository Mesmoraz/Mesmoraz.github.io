## Learning Unreal Engine

I want to showcase what I learned and what questions I still have and where I want to go.
### What I learned:
- I learned how to create a Player Controller.
- I learned how to create a camera and make the camera the default lens
- I learned how to attach input to a Pawn class.

### Questions I still have
- How do I know which headers to use?
- How can I start to figure out which functions to use, they seem to be so specific which is great, but also difficult to read compared to Unity.

A player controller is the script in the game that is used for the, well, player. It's the script that is going to manage the parts of the game essential for player and should 
probably be handling the input as well. 

For this Brickbreak prototype game, so far I have two classes Paddle and Paddle_Player_Controller linked below.

Inside the PPC.cpp the first method definition is the BeginPlay override, as the controller inherits from the [Unreal Player Controller script](https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Framework/Controller/PlayerController/)

This is admitedly not how I would ideally like to program this because I think creating a dynamic array for a Camera that we know will always be a single camera is a 
waste of resources. However, I think it's useful to learn that perhaps there will be other cameras and this might be a way to store them and navigate through them in the 
future.

Following these unreal tutorials is so difficult because these functions are high level, and also require you to follow all of them very strictly in order to 
acheive a simple result. `FViewTargetTransitionParams` for example is a struct that is a set of parameters [defined here](https://docs.unrealengine.com/4.26/en-US/API/Runtime/Engine/Camera/FViewTargetTransitionParams/)
that are used for camera transitions. It's variables include, BlendExp which is the shape of the curve of the camera, BlendFunction which is a completely different
system for blending (I believe that's involved in rendering?), BlendTime, and bLockOutgoing which quote, "if true, lock outgoing viewtarget to last frame's camera POV for the remainder of the blend" ...
_what?_

My understanding is that `Params` is just a set of numbers that the compiler needs to make the fancy camera do it's thing. I'd love to learn more about those, but it's a bit
too in depth for me currently!

~~~CPP
BeginPlay() 

  TArray<AActor*> CameraActors;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ACameraActor::StaticClass(), CameraActors);

	FViewTargetTransitionParams Params;
	SetViewTarget(CameraActors[0], Params); // which camera will display to the user

~~~


### Paddle_Player_Controller.cpp
~~~CPP
#include "Paddle_Player_Controller.h"

#include "Kismet/GameplayStatics.h"
#include "Camera/CameraActor.h"

#include "Paddle.h"
//#include "Ball.h"

APaddle_Player_Controller::APaddle_Player_Controller()
{

}

void APaddle_Player_Controller::BeginPlay()
{
	TArray<AActor*> CameraActors;
	UGameplayStatics::GetAllActorsOfClass(GetWorld(), ACameraActor::StaticClass(), CameraActors);

	// This seems really poor practice
	FViewTargetTransitionParams Params;
	SetViewTarget(CameraActors[0], Params); // which camera will display to the user

}


void APaddle_Player_Controller::SetupInputComponent()
{
	Super::SetupInputComponent();

	EnableInput(this); // when we provide input this class will detect it

	InputComponent->BindAxis("MoveHorizontal", this, &APaddle_Player_Controller::MoveHorizontal);

}



void APaddle_Player_Controller::MoveHorizontal(float AxisValue)
{
	auto MyPawn = Cast<APaddle>(GetPawn());
	
	if (MyPawn)
	{
		MyPawn->MoveHorizontal(AxisValue);
	}

}

~~~

### Paddle_Player_Controller.h

~~~CPP
#include "CoreMinimal.h"
#include "GameFramework/PlayerController.h"
#include "Paddle_Player_Controller.generated.h"

/**
 class ABall;
 */
UCLASS()
class PROTOTYPE_BRICKBREAK_API APaddle_Player_Controller : public APlayerController
{
	GENERATED_BODY()

		APaddle_Player_Controller();

	UFUNCTION()
		virtual void SetupInputComponent() override;

protected:
	virtual void BeginPlay() override;

	void MoveHorizontal(float AxisValue);

	// Ball references/variables

};
~~~
