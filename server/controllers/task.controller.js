const db = require("../models/index");
const Task = db.tasks;

exports.findAll = (req, res, next) => {
	Task.findAll({ where: { creatorId: req.userId } })
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((error) => {
			next(error);
		});
};

exports.findOne = (req, res, next) => {
	Task.findByPk(req.params.id)
		.then((data) => {
			if (data) {
				res.status(200).send(data);
			} else {
				res.status(404).send({ message: "Task not found" });
			}
		})
		.catch((error) => {
			next(error);
		});
};

exports.create = (req, res, next) => {
	if (!req.body.name) {
		return req.status(400).send({ message: "Name can't be empty" });
	}

	const task = {
		creatorId: req.userId,
		name: req.body.name,
		description: req.body.description,
		deadline: req.body.deadline,
	};

	Task.create(task)
		.then((data) => {
			res.status(201).send(data);
		})
		.catch((error) => {
			next(error);
		});
};

exports.update = (req, res, next) => {
	Task.update(req.body, { where: { id: req.params.id } })
		.then((num) => {
			if (num == 1) {
				res.status(200).send({ message: "Task updated successfully" });
			} else {
				res.status(404).send({ message: "Task not found" });
			}
		})
		.catch((error) => {
			next(error);
		});
};

exports.delete = (req, res, next) => {
	Task.destroy({ where: { id: req.params.id } })
		.then((num) => {
			if (num == 1) {
				res.status(200).send({ message: "Task deleted successfully" });
			} else {
				res.status(404).send({ message: "Task not found" });
			}
		})
		.catch((error) => {
			next(error);
		});
};
