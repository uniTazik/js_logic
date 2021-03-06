var Game = function() {
	this.rolls_array = [];
	this.display_array = [];
	this.roll_counter = 0;
	this.cell_counter = 1;
};

Game.prototype.bowl = function(pins) {
	var self = this;

	function throw_alert() {
		alert('Invalid throw');
	};

	function is_last_frame() {
		return self.cell_counter > 18;
	}

	function isInvalidScore() {
    var breaksLimit = pins + self.rolls_array[self.roll_counter - 1] > 10;
    if(! is_last_frame()) {

      if(self.cell_counter % 2 === 1) {
      // orice aruncare in prima celula a unui frame este valida
        return false;
      };
    // o aruncare este valida in al 2-lea frame daca suma nu depaseste 10 popice
    return pins + self.rolls_array[self.roll_counter - 1] > 10;
    } else {

      if(self.cell_counter === 19) {

        return false;
      };
      if(self.cell_counter === 20) {
        var wasStrike = self.rolls_array[self.roll_counter - 1] === 10;
        return !wasStrike && breaksLimit;
      };
      var wasStrike = self.rolls_array[self.roll_counter - 1] === 10;
      var wasSpare = self.rolls_array[self.roll_counter - 2] + self.rolls_array[self.roll_counter - 1] === 10;
      return !wasStrike && !wasSpare && breaksLimit;
    };
  };

  	if(isInvalidScore()) {
  		throw_alert();
  	} else {
  		self.rolls_array.push(pins);
  		self.compute_bowl(pins);
  	};
};

Game.prototype.compute_bowl = function(pins) {
	var self = this;
	function is_last_frame() {
		return self.cell_counter > 18;
	};
	
	function secondary_cell() {
		return self.cell_counter % 2 === 0;
	};
	
	function is_strike() {
		return pins === 10;
	};

	function is_spare() {
		return pins + self.rolls_array[self.roll_counter - 1] === 10;
	};

	function display_score() {
		self.display_array.push(pins);
	};

	
};