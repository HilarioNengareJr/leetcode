class Main:
    def __init__(self, sizeOfShape, xCentre, yCentre):
        self.sizeOfShape = sizeOfShape
        self.xCentre = xCentre
        self.yCentre = yCentre
        self.width = 79
        self.height = 25
        self.bg_char = '='
        self.shape_char = '$'
        self.screen = [['' for _ in range(self.width)] for _ in range(self.height)]

    def generate_background(self):
      # Fill the entire screen with '='
      for i in range(self.height):
          for j in range(self.width):
              self.screen[i][j] = '='
  
      # Add row labels every 10 rows
      for i in range(1, self.height, 10):
          label = str(i)
          for j, char in enumerate(label):
              if j < self.width:
                  self.screen[i][j] = char
  
      # Add column labels every 10 columns
      for j in range(1, self.width, 10):
          label = str(j)
          for i, char in enumerate(label):
              if i < self.height:
                  self.screen[i][j] = char


    def generate_diamond(self):
        # Create the diamond centered at (xCentre, yCentre) with sizeOfShape
        size = self.sizeOfShape
        for i in range(-size + 1, size):  
            row = self.yCentre + i
            
            if 0 <= row < self.height:  # Check row bounds
                num_chars = size - abs(i)
                start_col = self.xCentre - num_chars + 1
                end_col = self.xCentre + num_chars - 1
                for col in range(start_col, end_col + 1):
                    if 0 <= col < self.width:  # Check column bounds
                        self.screen[row][col] = self.shape_char

    def display(self):
        for row in self.screen:
            print(''.join(row))

    def run(self):
        self.generate_background()
        self.generate_diamond()
        self.display()

# Example usage:
if __name__ == "__main__":
    sizeOfShape = 4   # Size of the diamond
    xCentre = 40      # X-center of the diamond
    yCentre = 12      # Y-center of the diamond

    main = Main(sizeOfShape, xCentre, yCentre)
    main.run()
