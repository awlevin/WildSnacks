CC = gcc
CFLAGS = -Wall -Werror -c
SPHINX = -I/usr/local/include -I/usr/local/include/sphinxbase -I/usr/local/include/pocketsphinx -L/usr/local/lib -lpocketsphinx -lsphinxbase -lsphinxad
OBJ_SERVER = server/util.o server/server.o server/websocket.o server/http.o server/sha1.o server/base64.o
OBJ_AUDIO = audio/voice.o
OBJ_HW = hardware/i2c.o hardware/gpio.o hardware/accel.o
SHARED = -lpthread -lpocketsphinx -lsphinxbase -lsphinxad

main: hardware audio
	$(CC) $(OBJ_AUDIO) $(OBJ_HW) main.c $(SPHINX) $(SHARED) -o WildSnacks

hardware: $(OBJ_HW)

hardware/%.o: hardware/%.c
	$(CC) $(CFLAGS) -o $@ $<

audio: $(OBJ_AUDIO)

audio/%.o: audio/%.c
	$(CC) $(SPHINX) -c -o $@ $<

server: $(OBJ_SERVER)

server/%.o: server/%.c
	$(CC) $(CFLAGS) -o $@ $<

clean:
	rm hardware/*.o
	rm audio/*.o
	rm server/*.o
	rm WildSnacks
