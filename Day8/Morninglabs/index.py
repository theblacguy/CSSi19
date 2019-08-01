

def Factors():
    f= abs(int(raw_input("Enter number ")))
    while type (f)!= type(int()):
        print "please enter number"
        f= int(raw_input("Enter number "))
    type (f)== type(int())
    i=1
  
    while i<=f:
        if f % i ==0:
            print i," is a factor of ", +f
        else:
            print "This isn't a factor ", + i 
        i=i+1        
    
Factors ()



def CounToN():
    l= abs(int(raw_input("Enter your number ")))
    
    h=1
    while type (l)!= type(int()):
        print "please enter number"
        f= int(raw_input("Enter number "))
    type (l)== type(int())

    while h<=l:
        print h
        h+=1

CounToN()


k=0
theList= []
while len(theList)<100:
    
    k+=1
    theList.append(k)
    
    len(theList)==100
    
print theList