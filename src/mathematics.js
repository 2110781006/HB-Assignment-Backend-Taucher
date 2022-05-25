const mathematics = {}

/**
     * calculates the sum of the given values
     * @param values values
     * @return the sum of the given values
*/
mathematics.sumOfValues = (values) =>
{
    var sum = 0;

    if ( !Array.isArray(values) )
        return "not an array";

    for ( value of values )
        sum += value;

    return sum;
}

/**
 * calculates the average of the given values
 * @param values values
 * @return the average of the given values
 */
mathematics.avgOfValues = (values) =>
{
    var sum = 0;

    if ( !Array.isArray(values) )
        return "not an array";

    for ( var value of values )
        sum += value;

    return sum/values.length;
}


module.exports = mathematics;