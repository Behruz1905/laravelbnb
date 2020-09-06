<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use App\Model;
use App\Booking;

$factory->define(Booking::class, function (Faker $faker) {
    $from = \Carbon\Carbon::instance($faker->dateTimeBetween('-1 months', '+1 months'));
    $to = (clone $from)->addDays(random_int(0, 14));
    return [
        'from' => $from,
        'to' => $to,
        'price' => random_int(200,5000)

    ];
});

