#include "audio/voice.h"
#include "hardware/gpio.h"
#include "hardware/accel.h"
#include <stdio.h>
#include <unistd.h>
#include <assert.h>
#include <pthread.h>
#define LED_COUNT 8

static int status;
static int busy;

// aspects lights to be cleared
// clears all lights after ran
// assumes length is greater than 1
void LightRing(char** leds, int length, int delay) {
  int i;

 
  GpioSetValue(leds[0], 1);
  for (i = 1; i < length; i++) {
    //    printf("LightRing: %s (%d)\n", leds[i], i);
    usleep(delay);
    GpioSetValue(leds[i-1], 0);
    GpioSetValue(leds[i], 1);
  }
  usleep(delay);
  // printf("LightRing END: %s\n", leds[length-1]);
  GpioSetValue(leds[length-1], 0);
 
  
}

int main ( int argc, char* argv[] ) {
  int i;
    char* voice = malloc(1024);
  char** led_line;
  led_line =(char*)malloc(sizeof(char*) * LED_COUNT);
  for (i = 0; i < LED_COUNT; i++) {
    led_line[i] = malloc(4);
    assert(led_line[i] != NULL);
  }
  printf("Allocated GPIO\n");
  
  led_line[0] = GpioDB410cMapping(25);
  led_line[1] = GpioDB410cMapping(26);
  led_line[2] = GpioDB410cMapping(23);
  led_line[3] = GpioDB410cMapping(24);
  led_line[4] = GpioDB410cMapping(31);
  led_line[5] = GpioDB410cMapping(32);
  led_line[6] = GpioDB410cMapping(33);
  led_line[7] = GpioDB410cMapping(34);
  printf("MApped GPIO\n");

  for (i = 0; i < LED_COUNT; i++) {
    GpioEnablePin(led_line[i]);
    GpioSetDirection(led_line[i], 1);
  }
  printf("Set direction GPIO\n");

  
  GpioSetAllValue(led_line, LED_COUNT, 0); //clears


  // get PocketSphinx working
  setupVoiceDictionary();

  //  AccelSetup();
  
  while (1) {
    //    i = pthread_create(&threadT, NULL, LightRing, (void*) NULL);
    LightRing(led_line, LED_COUNT, 1000000);
    voice = voiceCommand();
    printf("%s\n", voice);
  } 
 
}
