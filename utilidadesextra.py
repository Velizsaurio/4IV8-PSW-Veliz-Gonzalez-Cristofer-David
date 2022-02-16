metros_en_kilometro = 1000
super_heroes = ("Thor","Iroman","Hulk")


def tomar_extension(filename):
    return filename[filename.index(".")+ 1: ]

def tirar_dado(num):
    return random.randint(1, num)