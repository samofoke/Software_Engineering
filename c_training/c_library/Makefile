#This is a make file to compile my small programmes

NAME = libft.a

CFLAGS = -Wall -Wextra -Werror

CC = gcc

SRC = sample.c

BINS = $(SRC:.c=.o)

all: $(NAME)

$(NAME):
		$(CC) $(CFLAGS) -c $(SRC)
		ar rc $(NAME) $(BINS)
		ranlib $(NAME)
		echo "The files are compiling.."
