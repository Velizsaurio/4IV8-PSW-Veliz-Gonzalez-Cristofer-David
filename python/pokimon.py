from utilidadesextra import tirar_dado
#juego pokimon



class Pokemon:
    def __init__(self, nombre, ataque):
        self.nombre= nombre
        self-ataque= ataque
        self.vida = 100



    p1 = Pokemon("Bulbasaur", 15)
    p2 = Pokemon("Eevee", 14) 


    p1.vida = 100
    p2.vida = 100
    turno= tirar_dado(2)
    print turno


    while p1.vida > 0  and p2.vida > 0
        if turno == 1:
            p2.vida = p2.vida -p1.ataque
            turno = 2
        else
            p1.vida = p1.vida - p2.ataque
            turno = 1