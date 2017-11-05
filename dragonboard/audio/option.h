#ifndef __AUDIO_OPTION_H__
#define __AUDIO_OPTION_H__

#include <stdio.h>
#include <stdint.h>
#include <string.h>

// TODO not need a ../ path
#include "../server/server.h"

// Assuming values match with int index of animation spec
typedef enum {
  LIGHT_SWTICH,
  LIGHT_COLOR,
  FIREPLACE,
  CAMERA,
  SEAKERS,
  MUSIC,
  GYRO
} anim_type;

// return -1 if invalid command
int detectCommand(char const* voice_str);

#endif
