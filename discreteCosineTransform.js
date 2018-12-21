// Daniel Izario

function DiscreteCosineTransform()
{
	this.main = function()
	{
		var dctHelper = DiscreteCosineTransformHelper;
		var width = screen.width - 20;
		var displaySize = new Coords(width, 200);

		a0 = Math.floor(Math.random() * 255);a1 = Math.floor(Math.random() * 255);a2 = Math.floor(Math.random() * 255);
		b0 = Math.floor(Math.random() * 255);b1 = Math.floor(Math.random() * 255);b2 = Math.floor(Math.random() * 255);
		c0 = Math.floor(Math.random() * 255);c1 = Math.floor(Math.random() * 255);c2 = Math.floor(Math.random() * 255);
		d0 = Math.floor(Math.random() * 255);d1 = Math.floor(Math.random() * 255);d2 = Math.floor(Math.random() * 255);
		e0 = Math.floor(Math.random() * 255);e1 = Math.floor(Math.random() * 255);e2 = Math.floor(Math.random() * 255);
		f0 = Math.floor(Math.random() * 255);f1 = Math.floor(Math.random() * 255);f2 = Math.floor(Math.random() * 255);
		g0 = Math.floor(Math.random() * 255);g1 = Math.floor(Math.random() * 255);g2 = Math.floor(Math.random() * 255);
		h0 = Math.floor(Math.random() * 255);h1 = Math.floor(Math.random() * 255);h2 = Math.floor(Math.random() * 255);
		
		a3 = Math.floor(Math.random() * 255);a4 = Math.floor(Math.random() * 255);a5 = Math.floor(Math.random() * 255);
		b3 = Math.floor(Math.random() * 255);b4 = Math.floor(Math.random() * 255);b5 = Math.floor(Math.random() * 255);
		c3 = Math.floor(Math.random() * 255);c4 = Math.floor(Math.random() * 255);c5 = Math.floor(Math.random() * 255);
		d3 = Math.floor(Math.random() * 255);d4 = Math.floor(Math.random() * 255);d5 = Math.floor(Math.random() * 255);
		e3 = Math.floor(Math.random() * 255);e4 = Math.floor(Math.random() * 255);e5 = Math.floor(Math.random() * 255);
		f3 = Math.floor(Math.random() * 255);f4 = Math.floor(Math.random() * 255);f5 = Math.floor(Math.random() * 255);
		g3 = Math.floor(Math.random() * 255);g4 = Math.floor(Math.random() * 255);g5 = Math.floor(Math.random() * 255);
		h3 = Math.floor(Math.random() * 255);h4 = Math.floor(Math.random() * 255);h5 = Math.floor(Math.random() * 255);
		
		a6 = Math.floor(Math.random() * 255);a7 = Math.floor(Math.random() * 255);
		b6 = Math.floor(Math.random() * 255);b7 = Math.floor(Math.random() * 255);
		c6 = Math.floor(Math.random() * 255);c7 = Math.floor(Math.random() * 255);
		d6 = Math.floor(Math.random() * 255);d7 = Math.floor(Math.random() * 255);
		e6 = Math.floor(Math.random() * 255);e7 = Math.floor(Math.random() * 255);
		f6 = Math.floor(Math.random() * 255);f7 = Math.floor(Math.random() * 255);
		g6 = Math.floor(Math.random() * 255);g7 = Math.floor(Math.random() * 255);
		h6 = Math.floor(Math.random() * 255);h7 = Math.floor(Math.random() * 255);
		
		var samplesOriginal = 
		[
			a0,  b0,  c0,  d0,   e0,   f0,  g0,  h0,  
			a1,  b1,  c1,  d1,   e1,   f1,  g1,  h1,  
			a2,  b2,  c2,  d2,   e2,   f2,  g2,  h2,
			a3,  b3,  c3,  d3,   e3,   f3,  g3,  h3,
			a4,  b4,  c4,  d4,   e4,   f4,  g4,  h4,
			a5,  b5,  c5,  d5,   e5,   f5,  g5,  h5, 
			a6,  b6,  c6,  d6,   e6,   f6,  g6,  h6,
			a7,  b7,  c7,  d7,   e7,   f7,  g7,  h7,
		];		

		var samplesNormalizedAndMinMax = dctHelper.samplesNormalize
		(
			samplesOriginal
		);

		var samplesNormalized = samplesNormalizedAndMinMax[0];
		var sampleMin = samplesNormalizedAndMinMax[1];
		var sampleMax = samplesNormalizedAndMinMax[2];

		var samplesInFrequencyDomain = dctHelper.samplesSpatialToFrequencyDomain
		(
			samplesNormalized
		);

		var samplesInSpatialDomain = dctHelper.samplesFrequencyToSpatialDomain
		(
			samplesInFrequencyDomain
		);		

		var samplesDenormalized = dctHelper.samplesDenormalize
		(
			samplesInSpatialDomain,
			sampleMin,
			sampleMax
		);

		DisplayHelper.samplesDraw("   Original (8x8)", displaySize, samplesOriginal); 
		DisplayHelper.samplesDraw("   Normalized (8x8)", displaySize, samplesNormalized); 
		DisplayHelper.samplesDraw("   DCT (8x8)", displaySize, samplesInFrequencyDomain);
		DisplayHelper.samplesDraw("   IDCT (8x8)", displaySize, samplesInSpatialDomain);
		DisplayHelper.samplesDraw("   Denormalized (8x8)", displaySize, samplesDenormalized);
	}
}

function Coords(x, y)
{
	this.x = x;
	this.y = y;
}
{

	Coords.prototype.add = function(other)
	{
		this.x += other.x;
		this.y += other.y;
		return this;
	}

	Coords.prototype.clone = function()
	{
		return new Coords(this.x, this.y);
	}

	Coords.prototype.divide = function(other)
	{
		this.x /= other.x;
		this.y /= other.y;
		return this;
	}

	Coords.prototype.divideScalar = function(scalar)
	{
		this.x /= scalar;
		this.y /= scalar;
		return this;
	}

	Coords.prototype.multiply = function(other)
	{
		this.x *= other.x;
		this.y *= other.y;
		return this;
	}

	Coords.prototype.overwriteWith = function(other)
	{
		this.x = other.x;
		this.y = other.y;
		return this;
	}

	Coords.prototype.subtract = function(other)
	{
		this.x -= other.x;
		this.y -= other.y;
		return this;
	}
}

function DiscreteCosineTransformHelper()
{

}

{
	DiscreteCosineTransformHelper.samplesDenormalize = function
	(
		samplesToDenormalize, 
		sampleMin, 
		sampleMax
	)
	{
		var returnValues = [];

		var sampleRange = sampleMax - sampleMin;

		for (var s = 0; s < samplesToDenormalize.length; s++)
		{
			var sampleNormalized = samplesToDenormalize[s];

			var sampleDenormalized = 
				(sampleNormalized + 1) 
				/ 2 
				* sampleRange 
				+ sampleMin;

			returnValues[s] = sampleDenormalized;
		}

		return returnValues;	
	}

	DiscreteCosineTransformHelper.samplesNormalize = function(samplesToNormalize)
	{
		var samplesMinAndMax = MathHelper.minAndMaxOfNumbers
		(
			samplesToNormalize
		);
		var sampleMin = samplesMinAndMax[0];
		var sampleMax = samplesMinAndMax[1];

		var sampleRange = sampleMax - sampleMin;

		var samplesNormalized = [];

		for (var s = 0; s < samplesToNormalize.length; s++)
		{
			var sample = samplesToNormalize[s];

			var sampleNormalized = 
				(sample - sampleMin) 
				/ sampleRange 
				* 2 
				- 1;

			samplesNormalized[s] = sampleNormalized;
		}

		var returnValues = 
		[
			samplesNormalized, sampleMin, sampleMax
		];

		return returnValues;
	}

	DiscreteCosineTransformHelper.samplesSpatialToFrequencyDomain = function
	(
		samplesToConvert
	)
	{
		var samplesTransformed = [];

		var numberOfSamples = samplesToConvert.length;

		for (var i = 0; i < numberOfSamples; i++)
		{
			var sampleTransformed = 0;

			for (var j = 0; j < numberOfSamples; j++)
			{
				sampleTransformed += 
					samplesToConvert[j] 
					* Math.cos
					(
						Math.PI
						* i
						* (j + .5)
						/ numberOfSamples
					);
			}

			samplesTransformed[i] = sampleTransformed;
		}

		return samplesTransformed;
	}

	DiscreteCosineTransformHelper.samplesFrequencyToSpatialDomain = function
	(
		samplesToConvert
	)
	{
		var samplesTransformed = [];

		var numberOfSamples = samplesToConvert.length;

		for (var i = 0; i < numberOfSamples; i++)
		{
			var sampleTransformed = samplesToConvert[0] / 2;

			for (var j = 1; j < numberOfSamples; j++)
			{
				sampleTransformed += 
					samplesToConvert[j] 
					* 2
					* Math.cos
					(
						Math.PI
						* (i + .5)
						* (j)
						/ numberOfSamples
					);
			}

			sampleTransformed /= numberOfSamples;
		
			samplesTransformed[i] = sampleTransformed;
		}

		return samplesTransformed;
	}
}

function DisplayHelper()
{

}
{
	
	DisplayHelper.ColorSets = 
	[ 
		[ "White", "Gray", "White" ],
		[ "White", "Black", "Green" ],
	]

	DisplayHelper.samplesDraw = function
	(
		title, 
		sizeInPixels,
		samplesToDraw
	)
	{
		var sampleMinAndMax = MathHelper.minAndMaxOfNumbers(samplesToDraw);
		var sampleMin = sampleMinAndMax[0];
		var sampleMax = sampleMinAndMax[1];
		var sampleRange = sampleMax - sampleMin;
		var sampleMean = (sampleMin + sampleMax) / 2;
	
		var canvas = document.createElement("canvas");
		canvas.width = sizeInPixels.x;
		canvas.height = sizeInPixels.y;

		var graphics = canvas.getContext("2d");

		var colorSetIndex = 1;
		var colorSet = DisplayHelper.ColorSets[colorSetIndex];
		graphics.fillStyle = colorSet[0];
		graphics.fillRect(0, 0, sizeInPixels.x, sizeInPixels.y);
		graphics.strokeStyle = colorSet[1]
		graphics.strokeRect(0, 0, sizeInPixels.x, sizeInPixels.y);
		graphics.fillStyle = colorSet[2];

		var marginInPixels = new Coords(0, 8);
		var sizeInPixelsMinusMargins = sizeInPixels.clone().subtract
		(
			marginInPixels
		).subtract
		(
			marginInPixels
		);
		var midlineOffset = sizeInPixels.clone().divideScalar(2);
		midlineOffset.x = 0;
		var numberOfSamples = samplesToDraw.length;
		var sizeInSamples = new Coords(numberOfSamples, sampleRange);
		var sampleScaleInPixels = sizeInPixelsMinusMargins.clone().divide
		(
			sizeInSamples
		).multiply
		(
			new Coords(1, -1)	
		);
		var sampleOffset = new Coords(0, sampleMean);

		graphics.beginPath();
		graphics.moveTo(0, midlineOffset.y);
		graphics.lineTo(sizeInPixels.x, midlineOffset.y);
		graphics.stroke();

		var samplePos = new Coords(0, 0);
		var drawPos = new Coords(0, 0);

		graphics.beginPath();

		for (var s = 0; s < samplesToDraw.length; s++)
		{
			var sampleValue = samplesToDraw[s];
			samplePos.x = s;
			samplePos.y = sampleValue;

			drawPos.overwriteWith
			(
				samplePos
			).subtract
			(
				sampleOffset
			).multiply
			(
				sampleScaleInPixels
			).add
			(
				midlineOffset
			);

			if (s == 0)
			{
				graphics.moveTo(drawPos.x, drawPos.y);
			}
			else
			{
				graphics.lineTo(drawPos.x, drawPos.y);
			}
		}
		graphics.stroke();

		for (var s = 0; s < samplesToDraw.length; s++)
		{
			var sampleValue = samplesToDraw[s];

			sampleValue = MathHelper.roundNumberToDecimalPlaces
			(
				sampleValue, 2
			);
			samplePos.x = s;
			samplePos.y = sampleValue;

			drawPos.overwriteWith
			(
				samplePos
			).subtract
			(
				sampleOffset
			).multiply
			(
				sampleScaleInPixels
			).add
			(
				midlineOffset
			);

			graphics.beginPath();
			graphics.arc(drawPos.x, drawPos.y, 2, 0, Math.PI * 2);
			graphics.stroke();

			if (sampleValue != 0)
			{
				graphics.fillText("" + sampleValue, drawPos.x, drawPos.y);
			}
		}

		var fontHeightInPixels = 10;
		for (var i = 0; i < 3; i++)
		{
			graphics.fillText
			(
				title, 
				0, 
				fontHeightInPixels
			);
		}


		document.body.appendChild(canvas);		
	}

	DisplayHelper.samplesPrint = function(prefix, samplesToPrint)
	{
		var stringToDisplay = prefix;
		var lineBreaks = "<br /><br />";

		var decimalPlacesToRoundTo = 3;

		for (var s = 0; s < samplesToPrint.length; s++)
		{
			var sample = samplesToPrint[s];

			var sampleRounded = MathHelper.roundNumberToDecimalPlaces
			(
				sample, decimalPlacesToRoundTo
			);

			stringToDisplay += sampleRounded + ", "
		}

		document.write(stringToDisplay);
		document.write(lineBreaks);
	}
}

function MathHelper()
{

}

{
	MathHelper.minAndMaxOfNumbers = function(numbersToFindMinAndMaxOf)
	{
		var min = numbersToFindMinAndMaxOf[0];
		var max = numbersToFindMinAndMaxOf[0];
	
		for (var i = 1; i < numbersToFindMinAndMaxOf.length; i++)
		{
			var number = numbersToFindMinAndMaxOf[i];

			if (number < min)  			
			{
				min = number;
			}
			else if (number > max)
			{
				max = number;
			}
		}

		var returnValues = [ min, max ];

		return returnValues;	
	}

	MathHelper.roundNumberToDecimalPlaces = function(numberToRound, decimalPlaces)
	{
		var multiplier = Math.pow(10, decimalPlaces);

		var returnValue = Math.round
		(
			numberToRound
			* multiplier
		) / multiplier;

		return returnValue;
	}
}

new DiscreteCosineTransform().main();
